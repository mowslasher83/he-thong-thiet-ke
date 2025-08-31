import React from 'react';
import './Button.css';

const Button = ({ children, onClick, styleType }) => {
  return (
    <button className={`btn ${styleType}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;