import React from 'react';
import Nav from '../Components/HomeScreenLayout/Nav';
<Nav/>
const SupportContact = () => {
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
      <form style={formStyle}>
        <h2 style={headerStyle}>Contact Us</h2>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input type="text" id="name" name="name" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea id="message" name="message" rows="4" required style={textareaStyle}></textarea>
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
    </div>
  );
};

export default SupportContact;
