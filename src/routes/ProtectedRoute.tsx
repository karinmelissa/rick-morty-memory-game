import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth/authService';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  console.log(isAuthenticated())
  return isAuthenticated() ? children : <Navigate to="/" />;
};