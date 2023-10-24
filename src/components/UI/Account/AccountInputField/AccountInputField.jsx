import React from 'react';
import clsx from 'clsx';

import IconClose from '../../Icon/Icon_close';

import './AccountInputField.scss';

const AccountInputField = ({
  label,
  placeholder,
  type,
  icon,
  name,
  id,
  isDisabled,
  isValid,
  errors,
  onChange,
  value,
  minLength,
  maxLength,
  required,
  resetInput,
}) => {
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
              />
              <button type="reset" className="account-input-field__input-button">
                <IconClose className="account-input-field__input-button-icon" />
              </button>
            </div>
          )}
        </label>
      </div>
      <span
        // className={`${isValid} ? account-input-field__error : account-input-field__error
        className={clsx(
          'account-input-field__error',
          isValid && 'account-input-field__error_visible'
        )}
      >
        {errors}
      </span>
    </div>
  );
};

export default AccountInputField;
