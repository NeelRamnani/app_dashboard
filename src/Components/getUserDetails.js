// src/components/Auth/getUserDetails.js
import axios from 'axios';

const getUserDetails = async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get('http://localhost:3000/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data.data.user; // Adjust according to your API response structure
  } catch (error) {
    console.error('Failed to fetch user details:', error);
    return null;
  }
};

export default getUserDetails;
