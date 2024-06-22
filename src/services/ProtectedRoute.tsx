import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component }) => {
  const userDetailsString = localStorage.getItem('user');
  const isAuthenticated = !!userDetailsString;
  console.log('  isAuthenticated ', isAuthenticated);
  return !isAuthenticated ? <Navigate to="/" replace /> : <Component />;
};

export default ProtectedRoute;
