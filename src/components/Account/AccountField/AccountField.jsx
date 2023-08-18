import React from 'react';
import './AccountField.scss';

const AccountField = ({ label, placeholder, type, icon }) => {
  return (
    <div className="account-field">
      {icon}
      <label className="account-field__label">
        {label}
        <input className="account-field__input" type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default AccountField;
