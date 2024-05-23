import React, { useState } from 'react';

const PromptSuggest = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);

  const templatePrompt = `Transcript of a dialog, where the User interacts with an Assistant named Stablediffy. Stablediffy knows much about prompt engineering for stable diffusion (an open-source image generation software). The User asks Stablediffy about prompts for stable diffusion Image Generation.

Possible keywords for stable diffusion: "cinematic, colorful background, concept art, dramatic lighting, high detail, highly detailed, hyper realistic, intricate, intricate sharp details, octane render, smooth, studio lighting, trending on artstation, landscape, scenery, cityscape, underwater, salt flat, tundra, jungle, desert mountain, ocean, beach, lake, waterfall, ripples, swirl, waves, avenue, horizon, pasture, plateau, garden, fields, floating island, forest, cloud forest, grasslands, flower field, flower ocean, volcano, cliff, snowy mountain city, cityscape, street, downtown"

-- Transcript --

USER: suggest a prompt for a young girl from Swiss sitting by the window with headphones on
ASSISTANT: gorgeous young Swiss girl sitting by window with headphones on, wearing white bra with translucent shirt over, soft lips, beach blonde hair, octane render, unreal engine, photograph, realistic skin texture, photorealistic, hyper realism, highly detailed, 85mm portrait photography, award winning, hard rim lighting photography

USER: suggest a prompt for an mysterious city
ASSISTANT: Mysterious city, cityscape, urban, downtown, street, noir style, cinematic lightning, dramatic lightning, intricate, sharp details, octane render, unreal engine, highly detailed, night scene, dark lighting, gritty atmosphere

USER: suggest a prompt for a high quality render of a car in 1950
ASSISTANT: Car in 1950, highly detailed, classic car, 1950's, highly detailed, dramatic lightning, cinematic lightning, unreal engine

USER: ${userInput}`;

  const dataTemplate = {
    model: "mistral",
    prompt: "",
    stream: false
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt = templatePrompt.replace("${userInput}", userInput);
    const data = { ...dataTemplate, prompt };

    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: error.message });
    }
  };

  return (
    <div className="ImaginAi_fn_content">
      <div className="ImaginAi_fn_page">
        <div className="ImaginAi_fn_image_generation_page">
          <div className="generation__page">
            <div className="generation_header">
              <div className="header_top">
                <h1 className="title">Prompt Suggestion</h1>
                <div className="setup">
                  <a href="#" className="sidebar__trigger">
                    <img src="svg/option.svg" alt="option" className="fn__svg" />
                  </a>
                </div>
              </div>
              <div className="header_bottom">
                <div className="include_area">
                  <textarea 
                    id="fn__include_textarea" 
                    rows={1} 
                    value={userInput} 
                    onChange={handleInputChange} 
                    placeholder="Enter your prompt here"
                  />
                  <textarea className="fn__hidden_textarea" rows={1} tabIndex={-1} defaultValue={""} />
                </div>
                <div className="generate_section">
                  <label className="fn__toggle">
                  </label>
                  <button 
                    id="generate_it" 
                    className="ImaginAi_fn_button" 
                    onClick={handleSubmit}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
            {response && (
              <div className="response">
                <h2>Response:</h2>
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSuggest;
