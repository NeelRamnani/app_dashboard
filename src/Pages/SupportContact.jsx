import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SupportContact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/contact', { name, email, message });
      toast.success('Contact submitted successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      toast.error('Error submitting contact');
    }
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'linear-gradient(90deg, rgba(44,8,41,1) 0%, rgba(69,0,58,1) 100%, rgba(88,44,151,1) 100%);',
  };

  const formStyle = {
    background: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    marginTop: 0,
    marginBottom: '16px',
    fontSize: '1.5em',
    color: '#555',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '16px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #555',
    borderRadius: '8px',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #555',
    borderRadius: '8px',
    boxSizing: 'border-box',
    resize: 'vertical',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: 'purple',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
   
  };


  return (
   
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headerStyle}>Contact Us</h2>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input type="text" id="name" value={name}
          onChange={(e) => setName(e.target.value)}  required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea id="message" 
         
          required rows="4" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}  style={textareaStyle}></textarea>
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SupportContact;
