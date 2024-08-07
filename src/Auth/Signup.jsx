import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let isValid = true;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

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
    if (!formData.name) {
      toast.error('Name is required.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:3000/signup', { user: formData }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response && response.data) {
        console.log(response.data);
        // Clear form after successful signup
        setFormData({ email: '', password: '', confirmPassword: '', name: '' });
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
          src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Flogin-hero-images%2FAzarathag.webp&w=3840&q=75"
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
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="abc@gmail.com"
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
              placeholder="At least 8 characters"
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
              placeholder="Re-enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g John"
            />
          </div>

          <button type="submit" className="submit-button">
            Signup
          </button>
          <br />
          <center>
            <Link to="/login">Already have an account? Sign in</Link>
          </center>
          <div>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
