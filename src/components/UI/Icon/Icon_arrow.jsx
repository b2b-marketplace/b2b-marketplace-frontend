import React from 'react';
import Icon from './Icon';

const IconArrow = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none">
        <path
          d="M12 20L24 8M24 8L36 20M24 8L24 38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconArrow;
