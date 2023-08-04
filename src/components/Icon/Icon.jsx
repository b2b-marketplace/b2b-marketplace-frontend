import React from 'react';
import './Icon.scss';

const Icon = ({ children, className, ...props }) => {
  return (
    <span {...props} className={`icon ${className}`}>
      {children}
    </span>
  );
};

export default Icon;
