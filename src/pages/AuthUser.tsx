import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { Login } from '@/components/Login';
import { Register } from '../components/Register';
import { type User } from '@/types/user/types';


export const AuthUser = () => {
  const [error, setError] = useState('');
  const [formType, setFormType] = useState<'login' | 'register'>('login');
  const { login, register } = useAuth()
  const navigate = useNavigate();

const handleSubmit = (data: User) => {
  console.log(data)
  const success = formType === 'login' ? login(data) : register(data);
  if (success) navigate('/game');
  else setError('Credenciales incorrectas');
};


  return (
    <>
      {formType == 'login' ? (
        <>
          <Login onLogin={handleSubmit} error={error} />
          <p>¿No tienes cuenta? <button type="button" onClick={() => setFormType('register')}>Registrate aqui</button></p>
        </>
      ) : (
        <>
          <Register onRegister={handleSubmit} error={error} />
          <p>¿Ya tienes cuenta? <button type="button" onClick={() => setFormType('login')}>Inicia sesion</button></p>

        </>
      )}
    </>
  );
};