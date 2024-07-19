import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import GoogleLoginComponent from '../Components/GoogleLoginComponent';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        user: { email, password },
      });
      const token = response.headers.authorization;
      const userId = response.data.status.data.user.id; // Extract user ID from response
      const userName = response.data.status.data.user.name;

      // Store token, user ID, and user name in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', userName);
    
      alert("Success");
      navigate('/dashboard');
      setTimeout(() => {
        window.location.reload();
      }, 0.005);
    } catch (err) {
      alert('Invalid email or password');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Flogin-hero-images%2FFemaleAdventurer3.webp&w=3840&q=75" alt="Login Visual" className="login-image" />
      </div>
    
      <div className="form-container">
        <Link to='/'><button className="back-button">Back</button></Link>
        <h2 className="login-title">forgot Password?</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="e.g john@gmail.com"
            />
          </div>

       
     
        
        
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">Reset Password</button>
          <br />
    
      
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
