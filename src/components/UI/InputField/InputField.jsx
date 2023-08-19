import React from 'react';
import './InputField.scss';

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input className="input-field__input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
