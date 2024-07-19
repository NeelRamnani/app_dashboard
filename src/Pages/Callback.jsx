// src/pages/Callback.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import generateRandomToken from '../utils/generateToken';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Generate a random token
    const token = generateRandomToken();

    // Store the generated token in localStorage
    localStorage.setItem('token', token);

    // Redirect to home or dashboard
    navigate('/dashboard');
    setTimeout(() => {
        window.location.reload();
      }, 0.005);
  }, [navigate]);

  return <div>Processing...</div>;
};

export default Callback;
