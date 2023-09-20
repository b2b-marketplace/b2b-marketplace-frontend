import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isLoggedIn = false, isRole = 'buyer', ...props }) => {
  if (isLoggedIn) {
    return <Component {...props} />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
