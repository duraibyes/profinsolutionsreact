import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from './store';

interface ProtectedRouteProps {
  element: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  return !token ? <Navigate to="/" replace /> : <Component />;
};

export default ProtectedRoute;
