import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import './login.css';
import { toast } from 'react-toastify';

import axios from 'axios';


const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/login', {
          identifier,
          password
        });
        setMessage(response.data.message);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.error);
        } else {
          setMessage('An error occurred. Please try again later.');
        }
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
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}placeholder='m@example.com' />
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
                            {message && <p>{message}</p>}
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
