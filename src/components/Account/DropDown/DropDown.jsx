import React from 'react';
import './DropDown.scss';

const DropDown = ({ title, text }) => {
  return (
    <div className="drop-down">
      <label className="drop-down__label">{title}</label>
      <select class="drop-down__input">
        <option className="drop-down__list" selected>
          {text}
        </option>
        <option value="1">Один</option>
        <option value="2">Два</option>
        <option value="3">Три</option>
      </select>
    </div>
  );
};

export default DropDown;
