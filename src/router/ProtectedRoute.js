import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  // Check if the user is authenticated
  const isAuthenticated = true; // Replace with your actual authentication check

  // If authenticated, render the provided element (e.g., Dashboard)
  // If not authenticated, redirect to the login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;