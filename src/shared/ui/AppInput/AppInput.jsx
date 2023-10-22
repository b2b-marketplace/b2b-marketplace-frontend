import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AppInput.scss';

const AppInput = ({ className, mode, size, type, value, placeholder, onClick, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(
        'app-input',
        mode && `app-input_${mode}`,
        size && `app-input_${size}`,
        className
      )}
    />
  );
};

AppInput.propTypes = {
  mode: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['auto']),
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

AppInput.defaultProps = {
  mode: 'primary',
  size: 'auto',
  type: 'text',
  className: '',
  onClick: undefined,
  onChange: undefined,
};

export { AppInput };
