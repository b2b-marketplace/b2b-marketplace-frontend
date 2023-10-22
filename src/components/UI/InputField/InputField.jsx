import React from 'react';

import './InputField.scss';

const InputField = ({
  label,
  placeholder,
  type,
  className,
  inputClassName,
  labelClassName,
  onChange,
  name,
  value,
}) => {
  return (
    <div className={`input-field ${className || ''}`}>
      <label className={`input-field__label ${labelClassName || ''}`}>{label}</label>
      <input
        className={`input-field__input ${inputClassName || ''}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default InputField;
