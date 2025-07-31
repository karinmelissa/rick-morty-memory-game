// src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?:boolean;
};

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  fullWidth = false,

}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${fullWidth && styles.fullWidth} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
