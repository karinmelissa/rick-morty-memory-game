import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth/authService';
import { JSX } from 'react';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};