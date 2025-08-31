import React from 'react';
import './Input.css';

const Input = ({ placeholder, type, value, onChange }) => {
  return <input type={type} value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;