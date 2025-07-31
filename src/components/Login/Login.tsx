// src/components/Login/Login.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';


interface LoginProps{
    onLogin: (data: { email: string; password: string }) => void;
    error:string
}
export const Login = ( {onLogin, error}:LoginProps ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email, password })
    // const success = login({ username, password });
    // if (success) navigate('/game');
    // else setError('Credenciales incorrectas');
  };

  return (
    <div className={styles.container}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Ingresar</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
};
