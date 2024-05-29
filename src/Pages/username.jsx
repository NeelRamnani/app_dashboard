import React, { useState, useEffect } from 'react';
import axios from 'axios';

const username = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          const response = await axios.get('/api/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserName(response.data.name);
   
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userName}</p>
    </div>
  );
};

export default username;