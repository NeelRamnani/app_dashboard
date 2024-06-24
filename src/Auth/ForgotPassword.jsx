// src/components/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/forgot_password', { user: { email } });
      toast.success('Password reset instructions sent to your email');
      setEmail('');
    } catch (err) {
      console.error(err);
      toast.error('Error sending password reset instructions');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h2>Forgot Password</h2>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '12px', fontSize: '16px', color: 'white', backgroundColor: 'blue', border: 'none', borderRadius: '4px' }}>Send Reset Instructions</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
