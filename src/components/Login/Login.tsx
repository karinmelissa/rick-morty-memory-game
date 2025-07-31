import { useState } from 'react';
import styles from './Login.module.css';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import logo from '@/assets/ricky_morty_logo.png'


interface LoginProps {
  onLogin: (data: { email: string; password: string }) => void;
  onRegisterClick: () => void;
  error: string
}
export const Login = ({ onLogin, error, onRegisterClick }: LoginProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    onLogin({ email, password })
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />

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
        />        <Button type="submit" fullWidth>Ingresar</Button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p>¿No tienes cuenta? <Button type="button" variant="tertiary" onClick={onRegisterClick}>Registrate aqui</Button></p>
    </div>
  );
};
