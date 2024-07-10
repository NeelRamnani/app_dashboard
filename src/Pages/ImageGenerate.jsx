import React, { useState } from 'react';
import axios from 'axios';
import { YOUR_UNSPLASH_ACCESS_KEY } from '../../config';

const ImageGenerate = () => {
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleGenerateClick = async () => {
    const prompt = document.getElementById('fn__include_textarea').value.trim();

    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${YOUR_UNSPLASH_ACCESS_KEY}&query=${prompt}&per_page=4`);
      const imageUrls = response.data.results.map(result => result.urls.small);

      setGeneratedImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleDownloadClick = async (imageUrl) => {
    if (!imageUrl) {
      alert('No image to download');
      return;
    }

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const formData = new FormData();
      const prompt = document.getElementById('fn__include_textarea').value.trim();
      formData.append('image[image_file]', blob, 'generated_image.jpg');
      formData.append('image[prompt]', prompt);

      const token = localStorage.getItem('token'); // Adjust based on how you store the token
      const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

      if (!userId) {
        alert('User ID not found');
        return;
      }

      formData.append('image[user_id]', userId);

      const postResponse = await axios.post(
        'http://localhost:3000/api/images',
        formData,
        { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } }
      );

      console.log('Post response:', postResponse);
      alert('Image saved to database');

      // Trigger the download for the user
      const downloadLink = document.createElement('a');
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = 'generated_image.jpg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading or saving image:', error);
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
                  <div className="setup">
                    <a href="#" className="sidebar__trigger">
                      <img src="svg/option.svg" alt="" className="fn__svg" />
                    </a>
                  </div>
                </div>
                <div className="header_bottom">
                  <div className="include_area">
                    <textarea id="fn__include_textarea" rows={1} defaultValue={""} />
                    <textarea className="fn__hidden_textarea" rows={1} tabIndex={-1} defaultValue={""} />
                  </div>
                  <div className="generate_section">
                    <label className="fn__toggle">
                    </label>
                    <a id="generate_it" href="#" className="ImaginAi_fn_button" onClick={handleGenerateClick}>Generate</a>
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
              {/* The rest of your existing JSX code goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerate;
