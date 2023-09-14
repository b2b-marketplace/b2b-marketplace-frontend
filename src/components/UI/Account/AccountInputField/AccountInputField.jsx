import React from 'react';
import './AccountInputField.scss';
import IconClose from '../../Icon/Icon_close24';

const AccountInputField = ({ label, placeholder, type, icon, name, id, isDisabled, isValid, errors, onChange, value, minLength, maxLength, required, resetInput }) => {
  return (
    <div className="account-input-field">
      <div className="account-input-field__container">
        {icon}
        <label className="account-input-field__label">
          {label}
          {isDisabled ? (
            <input 
              className="account-input-field__input" 
              type={type} 
              placeholder={placeholder}
              name={name}
              id={id}
              onChange={onChange} 
              value={value}
              errors={errors}
            />
          ) : (
            <div className="account-input-field__inputwithicon">
              <input
                className="account-input-field__input account-input-field__input-active"
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange} 
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                errors={errors}
              />
              <button className="account-input-field__input-button" type="button" onClick={resetInput}>
                <IconClose />
              </button>
            </div>
          )}       
        </label>
      </div>
      <span
        className={`${
          isValid} ? account-input-field__error : account-input-field__error account-input-field__error_visible
        `}>
        {errors}
      </span>
    </div>
  );
};

export default AccountInputField;
