import React, { useState } from 'react';
import './AccountDropDown.scss';
import IconVisa from '../../Icon/Icon_visa';
import IconArrowDown from '../../Icon/Icon_arrow-down';

const AccountDropDown = ({ label }) => {
  const options = [<IconVisa />, <IconVisa />, <IconVisa />];
  const [selectedOption, setSelectedOption] = useState(<IconVisa />);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="account-drop-down">
      <label className="account-drop-down__label">{label}</label>
      <div className={`account-drop-down__select ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="account-drop-down__header" onClick={toggleMenu}>
          <span className="account-drop-down__current">{selectedOption}</span>
          <IconArrowDown />
        </div>

        {isMenuOpen && (
          <div className="account-drop-down__body">
            {options.map((option, index) => (
              <div
                key={index}
                className="account-drop-down__item"
                onClick={() => handleOptionChange(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountDropDown;
