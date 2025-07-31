import { useState } from 'react';
import styles from './Register.module.css';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import logo from '@/assets/ricky_morty_logo.png'

interface RegisterProps {
  onRegister: (data: { email: string; username: string; password: string }) => void;
  onLoginClick: () => void;
  error: string;
}

export const Register = ({ onRegister, error , onLoginClick}: RegisterProps) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameError || emailError || passwordError) {
      return; 
    }
    onRegister({ email, username, password });
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo}/>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          required
          validateEmail
          onChange={(val, err) => {
            setEmail(val);
            setEmailError(err);
          }}
          className={emailError ? styles.inputError : ""}
        />
        <Input
          label="Usuario"
          name="username"
          value={username}
          placeholder="Usuario"
          required
          minLength={3}
          onChange={(val, err) => {
            setUsername(val);
            setUsernameError(err);
          }}
          className={usernameError ? styles.inputError : ""}
        />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={password}
          placeholder="Contraseña"
          required
          minLength={6}
          onChange={(val, err) => {
            setPassword(val);
            setPasswordError(err);
          }}
          className={passwordError ? styles.inputError : ""}
        />
        <Button type="submit" fullWidth>
          Registrarme
        </Button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p>¿Ya tienes cuenta? <Button type="button" variant="tertiary" onClick={onLoginClick}>Inicia sesion</Button></p>
    </div>
  );
};
