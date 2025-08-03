import React, { ChangeEvent, useState } from "react";
import styles from './Input.module.css';

type InputProps = {
  type?: "text" | "password" | "email";
  label: string;
  name: string;
  value: string | number;
  onChange: (value:string, error: string) => void;
  required?: boolean;
  minLength?: number;
  className?: string;
  validateEmail?: boolean;
  placeholder?: string;
};

export const Input = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  required = false,
  minLength,
  className = "",
  validateEmail = false,
  placeholder = "",
}: InputProps) => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const validate = (val:string) => {
    if (required && !val) {
      return "Este campo es obligatorio.";
    }
    if (minLength && val.length < minLength) {
      return `Debe tener al menos ${minLength} caracteres.`;
    }
    if (validateEmail && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        return "Email inválido.";
      }
    }
    return "";
  };

  const handleChange = (e: { target: { value: any; }; }) => {
    setError('')
    const val = e.target.value;
    onChange && onChange(val, error);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  const val = e.target.value;
  const validationError = validate(val);
  setError(validationError);
  onChange && onChange(val, validationError);
};

const inputType = type === "password" && showPassword ? "text" : type;


  return (
    <div className={`${styles.container}`}>
      {label && (
        <label htmlFor={name} className={`${styles.label}`}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${styles.field} ${error? styles.error : ""}`}
      />
       {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.showPasswordBtn}
          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {showPassword ? (
            // Icono ojo abierto 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"></path>
            </svg>
          ) : (
            // Icono ojo cerrado
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0112 20c-6 0-10-8-10-8a18.88 18.88 0 014.16-5.6"></path>
              <path d="M1 1l22 22"></path>
              <path d="M9.88 9.88a3 3 0 104.24 4.24"></path>
              <path d="M14.12 14.12L9.88 9.88"></path>
            </svg>
          )}
        </button>
      )}
      {error && <small className={`${styles.errorMessage}`}>{error}</small>}
    </div>
  );
};

