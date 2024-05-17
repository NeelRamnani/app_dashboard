
import { Link } from 'react-router-dom'
import axios from 'axios';
// create a separate config.js file to store your access key
import React, { useState } from 'react';
import { YOUR_UNSPLASH_ACCESS_KEY } from '../../config';
  


const ImageGenerate = () => {
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerateClick = async () => {
    // Get the prompt value from the input
    const prompt = document.getElementById('fn__include_textarea').value.trim();
  
    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }
  
    // Fetch image from Unsplash API based on the prompt
    const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${YOUR_UNSPLASH_ACCESS_KEY}&query=${prompt}&per_page=1`);
    const imageUrl = response.data.results[0].urls.small;
  
    // Update the state to store the generated image URL
    setGeneratedImage(imageUrl);
  
  };
  return (
    
<div><div className="ImaginAi_fn_content">
    {/* PAGE (all pages go inside this div) */}
    <div className="ImaginAi_fn_page">
      {/* Image Generation Page */}
      <div className="ImaginAi_fn_image_generation_page">
        <div className="generation__page">
          {/* Generation Header */}
          <div className="generation_header">
            <div className="header_top">
              <h1 className="title">Image Generation</h1>
              <div className="setup">
                <a href="#" className="sidebar__trigger">
                  <img src="svg/option.svg" alt className="fn__svg" />
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
                <a id="generate_it" href="#" className="ImaginAi_fn_button" onClick={handleGenerateClick}>genearte</a>
              </div>
            </div>
          </div>
          <div className="generation_history">
          {generatedImage && (
            <div className="fn__generation_item">
              {/* Display the generated image */}
              <div className="item_list">
                <ul className="fn__generation_list">
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src={generatedImage} alt="Generated Image" />
                        {/* ... (existing code) ... */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>)}</div>
          {/* !Generation Header */}
          <div className="generation_history">
            <div className="fn__generation_item">
              <div className="item_header">
                <div className="title_holder">
                  <h2 className="prompt_title">Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors</h2>
                  <p className="negative_prompt_title">Negative prompt: Text, watermarks, off centre, blur, low res, out of frame, cut off, ugly</p>
                </div>
                <div className="item_options">
                  <div className="fn__icon_options medium_size align_right">
                    <a href="#" className="fn__icon_button">
                      <img src="svg/info.svg" alt className="fn__svg" />
                    </a>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <span className="text">ArtShaper v3</span>
                        </li>
                        <li>
                          <span className="text">512 x 512px</span>
                        </li>
                        <li>
                          <span className="text">March 15,  2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fn__icon_options medium_size align_right">
                    <a href="#" className="fn__icon_button">
                      <span className="dots" />
                    </a>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <a href="#">Copy Prompt</a>
                        </li>
                        <li>
                          <a href="#">Reuse Prompt</a>
                        </li>
                        <li>
                          <a href="#">Upscale All</a>
                        </li>
                        <li>
                          <a href="#">Download All</a>
                        </li>
                        <li className="high_priorety">
                          <a href="#">Delete All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_list">
                <ul className="fn__generation_list">
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/1.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/2.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/3.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/4.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fn__generation_item">
              <div className="item_header">
                <div className="title_holder">
                  <h2 className="prompt_title">Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors</h2>
                  <p className="negative_prompt_title">Negative prompt: Text, watermarks, off centre, blur, low res, out of frame, cut off, ugly</p>
                </div>
                <div className="item_options">
                  <div className="fn__icon_options medium_size align_right">
                    <a href="#" className="fn__icon_button">
                      <img src="svg/info.svg" alt className="fn__svg" />
                    </a>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <span className="text">ArtShaper v3</span>
                        </li>
                        <li>
                          <span className="text">512 x 512px</span>
                        </li>
                        <li>
                          <span className="text">March 15,  2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fn__icon_options medium_size align_right">
                    <a href="#" className="fn__icon_button">
                      <span className="dots" />
                    </a>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <a href="#">Copy Prompt</a>
                        </li>
                        <li>
                          <a href="#">Reuse Prompt</a>
                        </li>
                        <li>
                          <a href="#">Upscale All</a>
                        </li>
                        <li>
                          <a href="#">Download All</a>
                        </li>
                        <li className="high_priorety">
                          <a href="#">Delete All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_list">
                <ul className="fn__generation_list">
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/5.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/6.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/7.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/8.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fn__generation_item">
              <div className="item_header">
                <div className="title_holder">
                  <h2 className="prompt_title">Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors</h2>
                  <p className="negative_prompt_title">Negative prompt: Text, watermarks, off centre, blur, low res, out of frame, cut off, ugly</p>
                </div>
                <div className="item_options">
                  <div className="fn__icon_options medium_size align_right">
                    <a href="#" className="fn__icon_button">
                      <img src="svg/info.svg" alt className="fn__svg" />
                    </a>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <span className="text">ArtShaper v3</span>
                        </li>
                        <li>
                          <span className="text">512 x 512px</span>
                        </li>
                        <li>
                          <span className="text">March 15,  2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fn__icon_options medium_size align_right">
                    <a href="#" className="fn__icon_button">
                      <span className="dots" />
                    </a>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <a href="#">Copy Prompt</a>
                        </li>
                        <li>
                          <a href="#">Reuse Prompt</a>
                        </li>
                        <li>
                          <a href="#">Upscale All</a>
                        </li>
                        <li>
                          <a href="#">Download All</a>
                        </li>
                        <li className="high_priorety">
                          <a href="#">Delete All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_list">
                <ul className="fn__generation_list">
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/1.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/2.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/3.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/4.jpg" alt />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/download.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Original Image</a>
                                </li>
                                <li>
                                  <a href="#">Creative Upscaled Image</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscaled Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <img src="svg/upscale.svg" alt className="fn__svg" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Creative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">Alternative Upscale</a>
                                </li>
                                <li>
                                  <a href="#">HD Upscale</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <a href="#" className="fn__icon_button">
                              <span className="dots" />
                            </a>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <a href="#">Make Variations</a>
                                </li>
                                <li className="high_priorety">
                                  <a href="#">Delete Image</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="generation_more">
              <a href="pricing.html" className="ImaginAi_fn_button medium"><span>Previous Generations</span></a>
            </div>
          </div>
        </div>
        <div className="generation__sidebar">
          <div className="sidebar_model">
            <div className="fn__select_model">
              <a className="model_open">
                <img className="user_img" src="img/user/user.jpg" alt />
                <div className="author">
                  <h4 className="subtitle">Model</h4>
                  <h3 className="title">ArtShaper v3</h3>
                </div>
                <span className="fn__icon_button">
                  <img src="svg/arrow.svg" alt className="fn__svg" />
                </span>
              </a>
              <div className="all_models">
                <ul>
                  <li><a className="selected" href="#">ArtShaper v3</a></li>
                  <li><a href="#">ArtShaper v2</a></li>
                  <li><a href="#">GameVisuals</a></li>
                  <li><a href="#">VintageCar</a></li>
                  <li><a href="#">ArtDeco</a></li>
                  <li><a href="#">IceCold</a></li>
                  <li><a href="#">Water Effect</a></li>
                  <li><a href="#">Stable Diffusion v2</a></li>
                  <li><a href="#">Stable Diffusion v1</a></li>
                  <li><a href="#">Other</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar_details">
            <div className="number_of_images">
              <h4 className="title">Number of Images</h4>
              <div className="fn__quantity">
                <a href="#" className="decrease" />
                <input type="number" defaultValue={4} max={20} min={1} />
                <a href="#" className="increase" />
              </div>
            </div>
            <div className="img_sizes">
              <h4 className="title">Image Dimensions</h4>
              <div className="img_size_select">
                <select>
                  <option value="512_512" selected>512 x 512px</option>
                  <option value="768_768">768 x 768px</option>
                  <option value="512_1024">512 x 1024px</option>
                  <option value="768_1024">768 x 1024px</option>
                  <option value="1024_1024">1024 x 1024px</option>
                </select>
              </div>
            </div>
            <div className="guidance_scale">
              <h4 className="title">Image Dimensions<span className="fn__tooltip" title="Select the resoultion of the images."><img src="svg/question.svg" alt className="fn__svg" /></span></h4>
              <div className="fn__range">
                <div className="range_in">
                  <input type="range" min={1} max={40} defaultValue={7} />
                  <div className="slider" />
                </div>
                <div className="value">7</div>
              </div>
            </div>
          </div>
          {/* !Image Generation Page */}
        </div></div>
    </div></div></div>

  )
}

export default ImageGenerate