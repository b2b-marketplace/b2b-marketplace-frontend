import React from 'react';
import Icon from './Icon';

const IconPosition = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M25.3337 14.6666C25.3337 21.5084 18.1917 25.5628 16.4028 26.471C16.1488 26.6 15.8518 26.6 15.5978 26.471C13.8089 25.5628 6.66699 21.5084 6.66699 14.6666C6.66699 9.51193 10.8457 5.33325 16.0003 5.33325C21.155 5.33325 25.3337 9.51193 25.3337 14.6666Z"
          fill="#3DA1FF"
        />
        <ellipse cx="16" cy="14.6667" rx="4" ry="4" fill="white" />
      </svg>
    </Icon>
  );
};

export default IconPosition;
