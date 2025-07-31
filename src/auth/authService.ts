import { type User } from '@/types/user/types';

const USERS_KEY = 'users';
const TOKEN_KEY = 'token';
const CURRENT_USER_KEY = 'currentUser';

export const registerUser = (user: User): boolean => {
  const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const exists = users.some(u => u.email === user.email);
  if (exists) return false;

  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

   localStorage.setItem(TOKEN_KEY, 'rickmorty_token_123');
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return true;
};

export const loginUser = (user: User): boolean => {
  const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const match = users.find(u => u.email === user.email && u.password === user.password);
  if (!match) return false;

  localStorage.setItem(TOKEN_KEY, 'rickmorty_token_123');
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(match));
  return true;
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(TOKEN_KEY);
};

export const getCurrentUser = (): User | null => {
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
};
