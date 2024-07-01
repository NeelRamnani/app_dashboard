import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousGen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:3000/api/images?user_id=${userId}`);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="ImaginAi_fn_content">
      <div className="ImaginAi_fn_page">
        <div className="ImaginAi_fn_image_generation_page">
          <div className="generation__page">
            <h1 className="title" >My Previous Generated Images</h1>
            <div className="generation_history">
              <div className="fn__generation_item">
                <div className="item_list">
                  <ul className="fn__generation_list">
                    {images.map((image) => (
                      <li key={image.id} className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src={image.image_file_url} alt={image.prompt} className="fn__gl__img" />
                            <p>{image.prompt}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousGen;
