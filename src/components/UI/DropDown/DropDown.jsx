import React, { useState } from 'react';
import './DropDown.scss';
import IconArrowCounter from '../Icon/Icon_arrow-counter';

const DropDown = ({ label, placeholder, options, className, onChange, name }) => {
  const [activeOption, setActiveOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setActiveOption(option); // Устанавливаем активный элемент
    setIsMenuOpen(false);
    onChange(null, option, name);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleMenu();
    }
  };

  return (
    <div
      className={`drop-down ${className || ''}`}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onClick={toggleMenu}
    >
      <label className="drop-down__label">
        {label}
        <div className={`drop-down__select ${isMenuOpen ? 'is-active' : ''}`}>
          <div className="drop-down__header">
            <span className="drop-down__current">{selectedOption || placeholder}</span>

            {isMenuOpen ? <IconArrowCounter className="drop-down__icon" /> : <IconArrowCounter />}
          </div>

          {isMenuOpen && (
            <div className="drop-down__body">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`drop-down__item ${option === activeOption ? 'active' : ''}`}
                  onClick={() => handleOptionChange(option)}
                  tabIndex="0"
                >
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
