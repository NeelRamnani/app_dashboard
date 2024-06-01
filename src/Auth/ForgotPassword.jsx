// ForgotPasswordForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/forgot_password', { email });
      alert('An email with instructions to reset your password has been sent.');
    } catch (error) {
      console.error('Error sending forgot password request:', error);
      alert('Failed to send forgot password request.');
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="/public/img/login-bg.jpg" alt="Forgot Password Visual" className="login-image" />
      </div>

      <div className="form-container">
   
        <Link to='/'><button className="back-button">Back</button></Link>
       
        <form onSubmit={handleSubmit} className="forgot-password-form">
        
          <div className="form-group">
       
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="forgot-password-input"
            />
          </div>
          <button type="submit" className="submit-button">Reset Password</button>
        </form>
        <br />
        <Link to='/login'>Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
