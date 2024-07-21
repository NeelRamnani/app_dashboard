import express from 'express';
import { QdrantClient } from '@qdrant/js-client-rest';
import ollama from 'ollama';
import cors from 'cors';

const app = express();
const port = 4000;

const qdrant = new QdrantClient({ url: 'http://127.0.0.1:6333/' });
const collectionName = 'fyp';
const embedmodel = 'all-minilm';
const mainmodel = 'mistral';

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

async function getOrCreateCollection(client, name) {
  try {
    await client.getCollection(name);
  } catch (e) {
    await client.createCollection(name, { vectors: { size: 768, distance: 'Cosine' } });
  }
}

app.post("/process-query", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    await getOrCreateCollection(qdrant, collectionName);

    const queryembed = await ollama.embeddings({ model: embedmodel, prompt: query });
    if (!queryembed || !queryembed.embedding) {
      throw new Error('Failed to generate embeddings');
    }

    const searchResponse = await qdrant.search(collectionName, {
      vector: queryembed.embedding,
      limit: 5
    });

    if (!searchResponse || !searchResponse.length) {
      return res.json({ response: "No relevant documents found for the query." });
    }

    const relevantDocs = searchResponse.map(doc => doc.payload.content).join("\n\n");

    const modelQuery = `
   Below is the query that user has entered  

    "${query}"

   below is the relevant prompts that is retrieved from our database

    ${relevantDocs}
you need to generate a stable diffusion prompt (image generation),i am giving you a example cute cat is walking on the floor photography, Natural geographic photo, Hyper-realistic, 16k resolution, (masterpiece, award winning artwork), many details, extreme detailed, full of details, Wide range of colors, high Dynamic
   please use this is a reference and generate the prompt structure should be like the given example
    `;
console.log(relevantDocs);
    let responseText = '';
    const stream = await ollama.generate({ model: mainmodel, prompt: modelQuery, stream: true });

    for await (const chunk of stream) {
      responseText += chunk.response;
    }

    res.json({ response: responseText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing your request', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});