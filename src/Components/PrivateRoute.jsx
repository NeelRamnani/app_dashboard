import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  // Check if the token exists in local storage
  if (!token) {
    // If token doesn't exist, redirect to the login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If token exists, render the children components (e.g., Dashboard)
  return children;
};

export default PrivateRoute;