import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './login.css';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    return (
       
            <div className="login-container">
              <div className="image-container">
                <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg" alt="Login Visual" className="login-image" />
              </div>
              <div className="form-container">
              <Link to='/'><button className="back-button">Back</button></Link>
                <h2 className="login-title">Login</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required  placeholder='m@example.com'/>
                  </div>
              
             
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required   placeholder='asbbfdbA@#'/>
                    <Link to='/forgotPassword'>forgot password?</Link>
                  </div>
               
                  <button type="submit" className="submit-button">Login</button>
                  <br></br>
                  <center ><Link to='/signup'>Don't have an account?  Sign up</Link></center>
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