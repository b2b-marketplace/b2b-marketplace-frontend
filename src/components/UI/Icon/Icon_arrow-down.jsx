import React from 'react';
import Icon from './Icon';

const IconArrowDown = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5.83366 8.33333L10.0003 12.5L14.167 8.33333"
          stroke="currentColor"
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconArrowDown;
