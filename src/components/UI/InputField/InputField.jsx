import React from 'react';
import './InputField.scss';

const InputField = ({ label, placeholder, type, className, inputClassName, labelClassName }) => {
  return (
    <div className={`input-field ${className || ''}`}>
      <label className={`input-field__label ${labelClassName || ''}`}>{label}</label>
      <input
        className={`input-field__input ${inputClassName || ''}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
