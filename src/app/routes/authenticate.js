// AuthenticatedRoute.js - A reusable component to handle authentication logic
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ token, path, element }) => {
  return (
    <Route
      path={path}
      exact
      element={token ? element : <Navigate to="/login" />}
    />
  );
};

export default AuthenticatedRoute;
