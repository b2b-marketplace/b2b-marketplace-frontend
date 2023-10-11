import React from 'react';
import Icon from './Icon';

const IconInfoFill = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M17.3332 10.6666C17.3332 11.403 16.7362 11.9999 15.9998 11.9999C15.2635 11.9999 14.6665 11.403 14.6665 10.6666C14.6665 9.93021 15.2635 9.33325 15.9998 9.33325C16.7362 9.33325 17.3332 9.93021 17.3332 10.6666Z"
          fill="currentColor"
        />
        <path
          d="M16 22.6666V13.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconInfoFill;
