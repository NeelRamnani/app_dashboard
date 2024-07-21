import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreviousGen = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleDownload = async (url, prompt, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${prompt}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      toast.success('Image downloaded successfully!');
    } catch (error) {
      toast.error('Error downloading image.');
    }
  };

  const handleShare = async (url, e) => {
    e.stopPropagation();
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

  const handleCopyPrompt = (prompt, e) => {
    e.stopPropagation();
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

  const openOverlay = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className="ImaginAi_fn_content">
      <div className="ImaginAi_fn_page">
        <div className="ImaginAi_fn_image_generation_page">
          <div className="generation__page">
            <h1 className="title">My Previously Generated Images</h1>
            <div className="generation_history">
              <ul className="image_grid">
                {currentImages.map((image) => (
                  <li key={image.id} className="image_item">
                    <div className="image_container" onClick={() => openOverlay(image)}>
                      <img 
                        src={image.image_file_url} 
                        alt={image.prompt} 
                        className="generated_image" 
                      />
                      <div className="image_details">
                        <p className="image_prompt">{image.prompt}</p>
                        <div className="image_actions">
                          <button onClick={(e) => handleDownload(image.image_file_url, image.prompt, e)} title="Download">
                            <i className="fas fa-download"></i>
                          </button>
                          <button onClick={(e) => handleCopyPrompt(image.prompt, e)} title="Copy Prompt">
                            <i className="fas fa-copy"></i>
                          </button>
                          <button onClick={(e) => handleShare(image.image_file_url, e)} title="Share">
                            <i className="fas fa-share"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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

      {selectedImage && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeOverlay}>&times;</button>
            <img src={selectedImage.image_file_url} alt={selectedImage.prompt} className="overlay-image" />
            <div className="overlay-details">
              <h2>Prompt:</h2>
              <p>{selectedImage.prompt}</p>
              <div className="overlay-actions">
                <button onClick={(e) => handleDownload(selectedImage.image_file_url, selectedImage.prompt, e)} title="Download">
                  <i className="fas fa-download"></i>
                </button>
                <button onClick={(e) => handleCopyPrompt(selectedImage.prompt, e)} title="Copy Prompt">
                  <i className="fas fa-copy"></i>
                </button>
                <button onClick={(e) => handleShare(selectedImage.image_file_url, e)} title="Share">
                  <i className="fas fa-share"></i>
                </button>
              </div>
            </div>
            <div>
              <ToastContainer/>
              </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .ImaginAi_fn_content {
          padding: 20px;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
        }

        .image_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          list-style-type: none;
          padding: 0;
        }

        .image_item {
          background-color: #f5f5f5;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .image_container {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .generated_image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .image_details {
          padding: 15px;
        }

        .image_prompt {
          margin: 0 0 10px 0;
          font-size: 0.9em;
          color: #333;
        }

        .image_actions, .overlay-actions {
          display: flex;
          justify-content: space-around;
        }

        .image_actions button, .overlay-actions button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2em;
          color: #007bff;
          transition: color 0.3s;
        }

        .image_actions button:hover, .overlay-actions button:hover {
          color: #0056b3;
        }

        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 30px;
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

        .overlay {
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          display: flex;
          max-width: 80%;
          max-height: 80%;
          position: relative;
        }

        .close-button {
          position: absolute;
          right: 10px;
          top: 10px;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .overlay-image {
          max-width: 60%;
          max-height: 100%;
          object-fit: contain;
        }

        .overlay-details {
          flex: 1;
          padding: 0 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default PreviousGen;