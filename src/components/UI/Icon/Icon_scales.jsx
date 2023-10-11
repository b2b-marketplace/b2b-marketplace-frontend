import React from 'react';
import Icon from './Icon';

const IconScales = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
      >
        <rect
          x="24.667"
          y="9.33325"
          width="5.33333"
          height="17.3333"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="white"
        />
        <rect
          x="14"
          y="17.3333"
          width="5.33333"
          height="9.33333"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="white"
        />
        <rect
          x="3.33398"
          y="12"
          width="5.33333"
          height="14.6667"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="white"
        />
      </svg>
    </Icon>
  );
};

export default IconScales;
