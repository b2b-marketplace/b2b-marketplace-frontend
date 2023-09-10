import React from 'react';
import './AccountInputField.scss';

const AccountInputField = ({ label, placeholder, type, icon }) => {
  return (
    <div className="account-input-field">
      {icon}
      <label className="account-input-field__label">
        {label}
        <input className="account-input-field__input" type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default AccountInputField;
