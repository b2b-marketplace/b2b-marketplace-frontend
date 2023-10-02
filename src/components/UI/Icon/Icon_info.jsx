import React from 'react';
import Icon from './Icon';

const IconInfo = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.5" cy="8" r="7.5" stroke="currentColor" />
        <path
          d="M9 4.5C9 4.77614 8.77614 5 8.5 5C8.22386 5 8 4.77614 8 4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9 4.22386 9 4.5Z"
          fill="currentColor"
        />
        <path
          d="M8.5 11.8333V6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconInfo;
