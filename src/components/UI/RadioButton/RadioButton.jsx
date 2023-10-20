import React from 'react';

import './RadioButton.scss';

const RadioButton = ({
  name,
  id,
  value,
  handleChange,
  checked,
  children,
  extraClassName,
  color,
}) => {
  const handleClick = (event) => {
    if (event.target.tagName.toLowerCase() !== 'input') handleChange(event);
    event.stopPropagation();
  };

  return (
    <label
      onClick={handleClick}
      htmlFor={id}
      className={`radio-button ${extraClassName || ''} ${color}`}
    >
      <input
        className="radio-button__input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={() => {}}
      />
      <span
        className={`radio-button__custom ${checked ? 'radio-button__custom_active' : ''}`}
      ></span>
      {children}
    </label>
  );
};

export default RadioButton;
