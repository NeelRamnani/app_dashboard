import React, { useState } from 'react';
import axios from 'axios';
import loadingGif from '../assets/neel.gif'; // Adjust the path to your GIF file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PromptSuggest = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const dataTemplate = {
    query: ""
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const wordCount = userInput.trim().split(/\s+/).length;
    if (wordCount < 3) {
      toast.error('Please enter at least 3 words for prompt suggestion.');
      return;
    }

    const data = { ...dataTemplate, query: userInput };

    setLoading(true);

    try {
      const result = await axios.post('http://localhost:4000/process-query', data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      setResponse(result.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      toast.error('Error processing your request.');
      setResponse({ error: error.response ? error.response.data : error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (response && response.response) {
      navigator.clipboard.writeText(response.response)
        .then(() => {
          toast.success('Response copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          toast.error('Failed to copy response.');
        });
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
                  <button 
                    id="generate_it" 
                    className="ImaginAi_fn_button" 
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
              </div>
            </div>
            {loading && (
              <div className="loading-spinner">
                <img src={loadingGif} alt="Loading..." />
              </div>
            )}
            {response && !loading && (
              <div className="response-container">
                <h2 className='sug'>Suggested Prompt:</h2>
                <br></br>
                <div className="response-content">
                  <p>{response.response}</p>
                </div>
                <br></br>
                <button className="copy-button" onClick={handleCopy}>
                  Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
      <style jsx>{`
        .response-container {
          margin-top: 20px;
          padding: 20px;
          width:90%;
          margin-left:70px;
          background-color:transparent;
          border-radius: 8px;
        }
.sug{
font-size:23px;}
        .response-content {
           background-image: linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%);
        color:white;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 0px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

               
        
         .copy-button {
            background-image: linear-gradient(to left, #000000 15%, #53346D  51%, #000000  100%);
            margin: 0px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
          
            border-radius: 10px;
            display: block;
          }

          .copy-button:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         
         
         
      

        .loading-spinner img {
          width: 150px;
          height: 150px;
        }
      `}</style>
    </div>
  );
};

export default PromptSuggest;