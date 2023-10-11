import React from 'react';
import Icon from './Icon';

const IconLocation = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M24.5834 14.6666C24.5834 17.8094 22.9449 20.3529 21.0121 22.26C19.0809 24.1655 16.9245 25.3649 16.0631 25.8023C16.0225 25.8229 15.9777 25.8229 15.9371 25.8023C15.0757 25.3649 12.9193 24.1655 10.9881 22.26C9.05526 20.3529 7.41675 17.8094 7.41675 14.6666C7.41675 9.92614 11.2596 6.08325 16.0001 6.08325C20.7405 6.08325 24.5834 9.92614 24.5834 14.6666Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="14.6667" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </Icon>
  );
};

export default IconLocation;
