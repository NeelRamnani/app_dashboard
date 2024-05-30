import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        user: { email, password },
      });
      const  token  = response.headers.authorization;
      // console.log(response.headers.authorization)
  
      // Store the token in localStorage or other secure storage
      localStorage.setItem('token', token);
      const userName = response.data.status.data.user.name;
      localStorage.setItem('userName', userName);
    
      
      // Show a loading toast and navigate to the dashboard
      toast.success("success")
      navigate('/dashboard');
      // After navigation, dismiss the loading toast and show a success toast
      setTimeout(() => {
        window.location.reload();
      }, 0.005);
    } catch (err) {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="/public/img/login-bg.jpg" alt="Login Visual" className="login-image" />
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
              placeholder="m@example.com"
            />
          </div>

          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="john@#75"
              />
              {error && <p className="error-message">{error}</p>}
            </div>
            <Link to='/forgotPassword'>Forgot password?</Link>
          </div>

          <button type="submit" className="submit-button">Login</button>
          <br />
          <center><Link to='/signup'>Don't have an account? Sign up</Link></center>
          <div className="social-login">
            <button className="google-login">
              <GoogleIcon />
            </button>
            <button className="facebook-login">
              <FacebookOutlinedIcon className="social-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
