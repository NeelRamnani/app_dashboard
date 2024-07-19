import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import GoogleLoginComponent from '../Components/GoogleLoginComponent';

const Login = () => {
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
    
     toast.success("success");
      navigate('/dashboard');
      setTimeout(() => {
        window.location.reload();
      }, 0.005);
    } catch (err) {
      toast.error('Invalid email or password');
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
        <h2 className="login-title">Login</h2>
       
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

          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="*********"/>
                
                {/* <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton> */}
              
              {error && <p className="error-message">{error}</p>}
            </div>
            
            <Link to='/forgotPassword'>Forgot password?</Link>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">Login</button>
          <br />
          <center><Link to='/signup'>Don't have an account? Sign up</Link></center>
          <div className="social-login">
            {/* <button className="google-login">
              <GoogleIcon />
            </button> */}
           <GoogleLoginComponent />
            {/* <button className="facebook-login">
              <FacebookOutlinedIcon className="social-icon" />
            </button> */}
             <div>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
