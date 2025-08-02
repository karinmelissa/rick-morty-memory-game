import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
};

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  fullWidth = false,
  loading = false

}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${fullWidth && styles.fullWidth} `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
};
