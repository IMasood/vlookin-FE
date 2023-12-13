// AuthenticatedRoute.js - A reusable component to handle authentication logic
import React from 'react';
import { Cookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WebRoutes from '.';
import { Login } from '../components/Login';
import { routePaths } from './config';

const AuthenticatedRoute = ({path, element }) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routePaths.Admin.login} exact element={<Login />} />
        </Routes>
      </Router>
    </div>
    
  );
};

export default AuthenticatedRoute;
