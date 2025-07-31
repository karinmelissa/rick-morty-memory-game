// src/components/Login/Login.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Register.module.css';


interface RegisterProps{
    onRegister: (data: { email:string; username: string; password: string }) => void;
    error:string
}
export const Register = ( {onRegister, error}: RegisterProps ) => {

  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ email, username, password })
    // const success = login({ username, password });
    // if (success) navigate('/game');
    // else setError('Credenciales incorrectas');
  };

  return (
    <div className={styles.container}>
      <h2>Registrate</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Ingresar</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p>¿Ya tienes cuenta? <Link to="/register">Inicia sesion</Link></p>
    </div>
  );
};
