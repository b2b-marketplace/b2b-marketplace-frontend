import React, { useState } from 'react';
import './DropDown.scss';
import IconArrowCounter from '../Icon/Icon_arrow-counter';

const DropDown = ({ label, placeholder, options, className }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`drop-down ${className || ''}`}>
      <label className="drop-down__label">
        {label}
        <div className={`drop-down__select ${isMenuOpen ? 'is-active' : ''}`}>
          <div className="drop-down__header" onClick={toggleMenu}>
            <span className="drop-down__current">{selectedOption || placeholder}</span>
            <div className="drop-down__icon">
              <IconArrowCounter />
            </div>
          </div>

          {isMenuOpen && (
            <div className="drop-down__body">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="drop-down__item"
                  onClick={() => handleOptionChange(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default DropDown;
