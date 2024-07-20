import React, { useState } from 'react';
import axios from 'axios';
import loadingGif from '../assets/neel.gif'; // Adjust the path to your GIF file
import { ToastContainer, toast } from 'react-toastify';
const PromptSuggest = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  const dataTemplate = {
    query: "" // The key should match what the backend expects
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...dataTemplate, query: userInput }; // Directly use userInput as query

    setLoading(true); // Start loading

    try {
      const result = await axios.post('http://localhost:4000/process-query', data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Ensure the server responds with JSON
        }
      });

      setResponse(result.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setResponse({ error: error.response ? error.response.data : error.message });
    } finally {
      setLoading(false); // Stop loading
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
                {/* <div className="setup">
                  <a href="#" className="sidebar__trigger">
                    <img src="svg/option.svg" alt="option" className="fn__svg" />
                  </a>
                </div> */}
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
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? 'Generating...' : 'Generate'} {/* Change button text based on loading state */}
                  </button>
                </div>
              </div>
            </div>
            {loading && (
              <div className="loading-spinner">
                <img src={loadingGif} alt="Loading..." /> {/* Display GIF while loading */}
              </div>
            )}
            {response && !loading && (
              <div className="response">
                <h2>Response:</h2>
                <pre>{JSON.stringify(response, null, 2)}</pre>
                <button onClick={handleCopy}>Copy</button>
              </div>
            )}
          </div>
        </div>
        <div><ToastContainer/></div>
      </div>
    </div>
  );
};

export default PromptSuggest;
