import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import './login.css';

import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const { token } = response.data;

      // Store the token in localStorage or other secure storage
      localStorage.setItem('token', token);

      // Redirect or perform other actions after successful login
      console.log('Login successful');
    } catch (err) {
      setError(err.response.data.error || 'Login failed');
    }
  };



    return (
        <div className="login-container">
            <div className="image-container">
                <img src="public/img/login-bg.jpg" alt="Login Visual" className="login-image" />
            </div>

            <div className="form-container">
                <Link to='/'><button className="back-button">Back</button></Link>
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"  
                         id="username"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}placeholder='m@example.com' />
                    </div>

                    <div className="form-group password-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-container">
                            <input
                                type= "password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='john@#75'
                            />
                           {error && <p>{error}</p>}
                            {/* <button
                                type="button"
                                className="toggle-password-button"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </button>
                            */}
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