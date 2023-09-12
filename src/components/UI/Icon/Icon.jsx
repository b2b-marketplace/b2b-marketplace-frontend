import React from 'react';
import './Icon.scss';

const Icon = ({ children, className, ...props }) => {
  const localClassName = className === 'undefined' ? '' : className;

  return (
    <span {...props} className={`icon ${localClassName}`}>
      {children}
    </span>
  );
};

export default Icon;
