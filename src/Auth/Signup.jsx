import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let isValid = true;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!formData.username) {
      toast.error('Username is required.');
      isValid = false;
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      toast.error('Valid email is required.');
      isValid = false;
    }
    if (!formData.password || formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long.');
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response && response.data) {
        console.log(response.data);
        // Clear form after successful signup
        setFormData({ username: '', email: '', password: '', confirmPassword: '' });
        toast.success("Account Created Successfully!");
        // Redirect to login page after a short delay to allow toast notification to show
        setTimeout(() => navigate('/login'), 2000); // 2 seconds delay
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || 'Username or Email is already taken.');
      } else {
        toast.error('An error occurred during signup.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg"
          alt="Login Visual"
          className="login-image"
        />
      </div>
      <div className="form-container">
        <Link to="/login">
          <button className="back-button">Back</button>
        </Link>
        <h2 className="login-title">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="john"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="m@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="asbbfdbA@#"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Signup
          </button>
          <br />
          <center>
            <Link to="/login">Already have an account? Sign in</Link>
          </center>
          <div className="social-login">
            <button className="google-login">
              <GoogleIcon />
            </button>
            <div>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;