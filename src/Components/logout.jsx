// src/components/Auth/logout.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const logout = async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
    if (!token) {
      throw new Error('No token found');
    }

    await axios.delete('http://localhost:3000/logout', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      withCredentials: true,
    });

    localStorage.removeItem('token'); // Remove the token from local storage
    toast.success('Logout successful');
  } catch (error) {
    toast.error('Logout failed:', error);
  }
};

export default logout;
