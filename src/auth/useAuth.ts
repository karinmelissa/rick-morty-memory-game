import { useState } from 'react';
import {
  loginUser,
  logoutUser,
  registerUser,
  isAuthenticated,
  getCurrentUser,
} from './authService';
import { type User } from '@/types/user/types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(getCurrentUser());

  const login = (credentials: User): boolean => {
    const success = loginUser(credentials);
    console.log(success)
    if (success) setUser(getCurrentUser());
    return success;
  };

  const register = (newUser: User): boolean => {
    return registerUser(newUser);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    register,
    isAuthenticated: isAuthenticated()
  };
};