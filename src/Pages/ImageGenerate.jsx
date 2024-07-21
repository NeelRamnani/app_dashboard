import React, { useState } from 'react';
import axios from 'axios';

import { client, Status, GenerationStyle } from '../utils/imaginesdk';
import {ToastContainer, toast } from 'react-toastify';

const ImageGenerate = () => {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state
  const [options, setOptions] = useState({
    prompt: '',
    style: GenerationStyle.IMAGINE_V5,
    aspectRatio: '1:1',
    negativePrompt: '',
    cfg: 7,
    seed: '',
    steps: 30,
  });
  
  const apiKey = "vk-uAA77DgHwOddCU131Ke42kuIYfw8TFABt0VaKB9byAzKq";

  const styleOptions = Object.entries(GenerationStyle).map(([key, value]) => ({
    id: value,
    name: key.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOptions(prevOptions => ({ ...prevOptions, [name]: value }));
  };

  const generateImages = async (prompt) => {
    try {
      const imagine = client(apiKey);
      console.log('Sending request with:', { ...options, prompt });

      const response = await imagine.generations(prompt, options);

      console.log('Received response:', response);

      if (response.status() === Status.OK) {
        const image = response.data();
        if (image) {
          const imageUrl = URL.createObjectURL(image);
          return imageUrl;
        }
      } else {
        console.error(`Status Code: ${response.status()}`, response.errorOrThrow());
        alert('Failed to generate image');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Error generating image');
    }
    return null;
  };

  const handleGenerateClick = async () => {
    if (!options.prompt) {
      toast.error('Please enter a prompt');
      return;
    }

    setLoading(true); // Set loading to true before starting request

    const prompts = Array.from({ length: 4 }, (_, index) => {
      return `${options.prompt} variant ${index + 1}`; // Create 4 variants
    });

    try {
      const imageUrls = await Promise.all(prompts.map(prompt => generateImages(prompt)));
      setGeneratedImages(imageUrls.filter(url => url !== null));
    } catch (error) {
      console.error('Error generating images:', error);
      toast.error('Error generating images');
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  const handleDownloadClick = async (imageUrl) => {
    try {
      // Download image locally
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'generated_image.png'; // You can customize the filename if needed
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  
      // Save image to backend database
      const formData = new FormData();
      formData.append('image[image_file]', blob, 'generated_image.png');
      formData.append('image[prompt]', options.prompt);
  
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
  
      if (!userId) {
        alert('User ID not found');
        return;
      }
  
      formData.append('image[user_id]', userId);
  
      const responseBackend = await axios.post(
        'http://localhost:3000/api/images',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log('Image saved to database:', responseBackend.data);
      toast.success('Image saved');
    } catch (error) {
      console.error('Error handling download or save:', error);
      alert('Failed to download or save image');
    }
  };

  return (
    <div>
      <div className="ImaginAi_fn_content">
        <div className="ImaginAi_fn_page">
          <div className="ImaginAi_fn_image_generation_page">
            <div className="generation__page">
              <div className="generation_header">
                <div className="header_top">
                  <h1 className="title">Image Generation</h1>
                  
                </div>
                <div className="header_bottom">
                  <div className="include_area">
                    <textarea 
                      name="prompt"
                      value={options.prompt}
                      onChange={handleInputChange}
                      placeholder="Enter your prompt"
                      rows={3}
                    />
                  </div>
                  <div className="options_area">
                    <select name="style" value={options.style} onChange={handleInputChange}>
                      {styleOptions.map(style => (
                        <option key={style.id} value={style.id}>{style.name}</option>
                      ))}
                    </select>
                    <br></br>
                    <select name="aspectRatio" value={options.aspectRatio} onChange={handleInputChange}>
                      <option value="1:1">1:1</option>
                      <option value="16:9">16:9</option>
                      <option value="4:3">4:3</option>
                    </select>
                    <br></br>
                    <input
                      type="text"
                      name="negativePrompt"
                      value={options.negativePrompt}
                      onChange={handleInputChange}
                      placeholder="Negative prompt"
                    />
                    <input
                      type="number"
                      name="cfg"
                      value={options.cfg}
                      onChange={handleInputChange}
                      placeholder="CFG (1-20)"
                      min="1"
                      max="20"
                    />
                    <input
                      type="number"
                      name="seed"
                      value={options.seed}
                      onChange={handleInputChange}
                      placeholder="Seed (optional)"
                    />
                    <input
                      type="number"
                      name="steps"
                      value={options.steps}
                      onChange={handleInputChange}
                      placeholder="Steps (10-50)"
                      min="10"
                      max="50"
                    />
                  </div>
                  <div className="generate_section">
                    <a href="#" className="ImaginAi_fn_button" onClick={handleGenerateClick}>
                      {loading ? 'Generating...' : 'Generate'} {/* Loading text */}
                    </a>
                  </div>
                </div>
              </div>
              <div className="generation_history">
                {generatedImages.length > 0 && (
                  <div className="fn__generation_item">
                    <div className="item_list">
                      <ul className="fn__generation_list">
                        {generatedImages.map((imageUrl, index) => (
                          <li key={index} className="fn__gl_item">
                            <div className="fn__gl__item">
                              <div className="abs_item">
                                <img src={imageUrl} alt={`Generated Image ${index + 1}`} />
                                <div className="all_options">
                                  <div className="fn__icon_options medium_size">
                                    <button onClick={() => handleDownloadClick(imageUrl)} className="ImaginAi_fn_button">Download Image</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer/>
      </div>
      {loading && (
        <div className="loading-spinner">
          <img src="public\neel.gif" alt="Loading..." /> {/* Loading GIF */}
        </div>
        
      )}
    </div>
  );
};

export default ImageGenerate;
