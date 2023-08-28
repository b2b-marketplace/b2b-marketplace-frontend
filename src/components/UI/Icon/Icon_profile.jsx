import React from 'react';
import Icon from './Icon';

const IconProfile = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <circle
          cx="16.0003"
          cy="10.6668"
          r="4.58333"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M6.85847 21.3783C7.7069 19.1009 10.0814 18 12.5117 18H19.4883C21.9186 18 24.2931 19.1009 25.1415 21.3783C25.5255 22.409 25.849 23.6354 25.9594 25.0002C26.004 25.5507 25.5523 26 25 26H7C6.44772 26 5.99602 25.5507 6.04055 25.0002C6.15095 23.6354 6.47449 22.409 6.85847 21.3783Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconProfile;
