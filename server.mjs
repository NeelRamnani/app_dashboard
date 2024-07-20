import express from 'express';
import cors from 'cors';
import { QdrantClient } from '@qdrant/js-client-rest';
import ollama from 'ollama';

const app = express();
const port = 3000;

const qdrant = new QdrantClient({ url: 'http://127.0.0.1:6333/' });
const collectionName = 'imaginai';
const embedmodel = 'all-minilm';
const mainmodel = 'mistral';

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json()); // Middleware to parse JSON bodies

async function getOrCreateCollection(client, name) {
  try {
    await client.getCollection(name);
  } catch (e) {
    await client.createCollection(name, { vectors: { size: 768, distance: 'Cosine' } });
  }
}

app.post("/process-query", async (req, res) => {
  const { query } = req.body;

  try {
    await getOrCreateCollection(qdrant, collectionName);
    const queryembed = (await ollama.embeddings({ model: embedmodel, prompt: query })).embedding;
    const searchResponse = await qdrant.search(collectionName, {
      vector: queryembed,
      limit: 5
    });
    console.log(searchResponse);
    const relevantDocs = searchResponse.map(item => item.sentences).join(', ');
    const modelQuery = `${query} A user provides an initial prompt (query). Your task is to take this initial prompt and improve it. You should refer to an example prompt that was given at the start as a guide to understand the style and structure of a well-formed prompt. Additionally, you have access to some relevant documents (relevantDocs) that might help in making the prompt better. Once you have improved the prompt, please suggest suitable Stable Diffusion models that can be used with this enhanced prompt." ${relevantDocs}`;

    let responseText = '';
    const stream = await ollama.generate({ model: mainmodel, prompt: modelQuery, stream: true });

    for await (const chunk of stream) {
      responseText += chunk.response;
    }

    res.json({ response: responseText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error processing your request');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
