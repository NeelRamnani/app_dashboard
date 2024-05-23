import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log(response.data);
      // Assuming you want to log the response
      // Clear form after successful signup
      setFormData({ username: '', email: '', password: '' });
      alert('User signed up successfully');
    } catch (error) {
      console.error(error.response.data.error);
      alert('Error signing up. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default ForgotPassword;