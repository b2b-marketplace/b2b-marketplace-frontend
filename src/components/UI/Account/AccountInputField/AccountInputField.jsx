import React from 'react';
import './AccountInputField.scss';
import IconClose from '../../Icon/Icon_close24';

const AccountInputField = ({ label, placeholder, type, icon, isDisabled }) => {
  return (
    <div className="account-input-field">
      {icon}
      <label className="account-input-field__label">
        {label}
        {isDisabled ? (
          <input className="account-input-field__input" type={type} placeholder={placeholder} />
        ) : (
          <div className="account-input-field__inputwithicon">
            <input
              className="account-input-field__input account-input-field__input-active"
              type={type}
              placeholder={placeholder}
            />
            <button className="account-input-field__input-button" type="button">
              <IconClose />
            </button>
          </div>
        )}
      </label>
    </div>
  );
};

export default AccountInputField;
