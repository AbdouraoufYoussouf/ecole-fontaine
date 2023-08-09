import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  ...rest
}) => {
    const isAdmin = true
  return isAdmin  ? (
    <Route {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;




