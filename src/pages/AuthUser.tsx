import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { Login } from '@/components/Login';
import { Register } from '../components/Register';
import { type User } from '@/types/user/types';
import { Button } from '@/components/Button';

export const AuthUser = () => {
  const [error, setError] = useState('');
  const [formType, setFormType] = useState<'login' | 'register'>('login');
  const { login, register } = useAuth()
  const navigate = useNavigate();

  const handleSubmit = (data: User) => {
    const success = formType === 'login' ? login(data) : register(data);
    if (success) navigate('/game');
    else setError('Credenciales incorrectas');
  };


  return (
    <div className='content'>
      {formType == 'login' ? (

        <Login onLogin={handleSubmit} error={error} onRegisterClick={() => { setFormType('register'); setError('') }} />
      ) : (

        <Register onRegister={handleSubmit} error={error} onLoginClick={() => {setFormType('login'); setError('')}} />

      )}
    </div>
  );
};