import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    return (
       
            <div className="login-container">
              <div className="image-container">
                <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg" alt="Login Visual" className="login-image" />
              </div>
              <div className="form-container">
              <Link to='/login'><button className="back-button">Back</button></Link>
                <h2 className="login-title">Forgot Password?</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Enter your email</label>
                    <input type="text" id="email" name="email" required  placeholder='m@example.com'/>
                  </div>
              
             
            
               
                  <button type="submit" className="submit-button">Reset Password</button>
                  <br></br>
                  <center ><Link to='/contact'>need help? contact support </Link></center>

                </form>
              </div>
            </div>
          );
        }
        
  export default ForgotPassword;