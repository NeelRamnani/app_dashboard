import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreviousGen = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

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

  const handleDownload = (url, prompt) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${prompt}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (url) => {
    try {
      await navigator.share({
        title: 'Check out this image',
        url: url,
      });
      toast.success('Image shared successfully!');
    } catch (error) {
      toast.error('Error sharing image.');
    }
  };

  const handleCopyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt).then(() => {
      toast.success('Prompt copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy prompt.');
    });
  };

  // Pagination Logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ImaginAi_fn_content">
      <div className="ImaginAi_fn_page">
        <div className="ImaginAi_fn_image_generation_page">
          <div className="generation__page">
            <br></br>
            <h1 className="title">My Previous Generated Images</h1>
            <div className="generation_history">
              <div className="fn__generation_item">
                <div className="item_list">
                  <ul className="fn__generation_list">
                    {currentImages.map((image) => (
                      <li key={image.id} className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src={image.image_file_url} alt={image.prompt} className="fn__gl__img" />
                            <p>{image.prompt}</p>
                            <div className="actions">
                              <button onClick={() => handleDownload(image.image_file_url, image.prompt)}>
                                <i className="fas fa-download"></i>
                              </button>
                              <button onClick={() => handleShare(image.image_file_url)}>
                                <i className="fas fa-share"></i>
                              </button>
                              <button onClick={() => handleCopyPrompt(image.prompt)}>
                                <i className="fas fa-copy"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pagination">
              {[...Array(totalPages).keys()].map(number => (
                <button key={number + 1} onClick={() => paginate(number + 1)} className="pagination__button">
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .ImaginAi_fn_content .actions {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }

        .ImaginAi_fn_content .actions button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5em;
          color: #333;
          transition: color 0.3s;
        }

        .ImaginAi_fn_content .actions button:hover {
          color: #007bff;
        }

        .ImaginAi_fn_content .fn__gl__img {
          max-width: 100%;
          border-radius: 8px;
        }

        .ImaginAi_fn_content .fn__gl_item {
          margin-bottom: 20px;
        }

        .ImaginAi_fn_content .title {
          text-align: center;
          margin-bottom: 20px;
        }

        .ImaginAi_fn_content p {
          text-align: center;
          font-size: 1.2em;
          margin: 10px 0 0 0;
        }

        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .pagination__button {
          background: none;
          border: 1px solid #007bff;
          color: #007bff;
          padding: 5px 10px;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        .pagination__button:hover {
          background-color: #007bff;
          color: #fff;
        }

        .pagination__button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default PreviousGen;
