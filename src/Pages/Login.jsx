import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-container">
            <div className="image-container">
                <img src="public/img/login-bg.jpg" alt="Login Visual" className="login-image" />
            </div>

            <div className="form-container">
                <Link to='/'><button className="back-button">Back</button></Link>
                <h2 className="login-title">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" required placeholder='m@example.com' />
                    </div>

                    <div className="form-group password-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-container">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                placeholder='john@#75'
                            />
                            
                            <button
                                type="button"
                                className="toggle-password-button"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </button>
                           
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
