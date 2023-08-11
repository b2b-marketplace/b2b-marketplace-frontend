import React from 'react';
import "./Checkbox.scss";

const Checkbox = ({ className, children, name, value, ...props }) => {
  return (
    <label className={`checkbox ${className ? className : ''}`}>
      <input className="checkbox__input" type="checkbox" name={name} value={value}/>
      <div className="checkbox__span"></div>
    </label>
  );
};

export default Checkbox;
