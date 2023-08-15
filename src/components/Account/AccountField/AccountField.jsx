import React from 'react';
import './AccountField.scss';

const AccountField = ({ label, placeholder, type, icon }) => {
  return (
    <div className="account-field">
      <label className="account-field__label">
        {icon} {label}
      </label>
      <input className="account-field__input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default AccountField;
