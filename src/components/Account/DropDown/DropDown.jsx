import React, { useState } from 'react';
import './DropDown.scss';
import IconArrowCounter from '../../Icon/Icon_arrow-counter';

const DropDown = ({ label, placeholder }) => {
  const options = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];
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
    <div className="drop-down">
      <label className="drop-down__label">{label}</label>
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
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
