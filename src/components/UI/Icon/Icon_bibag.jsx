import React from 'react';
import Icon from './Icon';

const BiBag = ({ className, ...props }) => {
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
          d="M10.667 16L10.667 10.6667C10.667 7.72115 13.0548 5.33333 16.0003 5.33333V5.33333C18.9458 5.33333 21.3337 7.72115 21.3337 10.6667L21.3337 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.02768 15.6678C5.17276 13.9269 5.24529 13.0565 5.81938 12.5282C6.39347 12 7.26693 12 9.01386 12H22.9861C24.7331 12 25.6065 12 26.1806 12.5282C26.7547 13.0565 26.8272 13.9269 26.9723 15.6678L27.8195 25.8339C27.904 26.8474 27.9462 27.3542 27.6491 27.6771C27.352 28 26.8435 28 25.8264 28H6.1736C5.15655 28 4.64802 28 4.35092 27.6771C4.05382 27.3542 4.09605 26.8474 4.18051 25.8339L5.02768 15.6678Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </Icon>
  );
};

export default BiBag;
