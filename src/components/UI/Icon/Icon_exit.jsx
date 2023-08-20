import React from 'react';
import Icon from './Icon';

const IconExit = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none">
        <path
          d="M18.75 5.00122H6.25V22.5012C6.25 23.1643 6.51339 23.8001 6.98223 24.269C7.45107 24.7378 8.08696 25.0012 8.75 25.0012H18.75M20 18.7512L23.75 15.0012M23.75 15.0012L20 11.2512M23.75 15.0012H11.25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconExit;
