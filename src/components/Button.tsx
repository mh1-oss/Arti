import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  type = "button",
  ...props
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  
  return (
    <button type={type} className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
