import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ mode, size, border, type, extraClass, ...props }) => {
  const modeClass = `input__${mode}`;
  return (
    <>
      <input
        className={['input', modeClass, `input__size_${size}`, extraClass || ''].join(' ')}
        type={type}
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  mode: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['auto']),
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  mode: 'primary',
  size: 'auto',
  type: 'text',
  extraClass: '',
  onClick: undefined,
  onChange: undefined,
};
export default Input;
