import React from 'react';
import Icon from './Icon';

const IconCounterPlus = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M12 6L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 12L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default IconCounterPlus;
