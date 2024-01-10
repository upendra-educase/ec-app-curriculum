import React from 'react';
import './CustomInput.css'

const CustomInput = ({ placeholder, className, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
