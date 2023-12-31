import React from 'react';

import Icon from './Icon';

const IconCreditCard = ({ className }) => {
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
          d="M4.66675 11.5647C4.66675 10.5397 4.66675 10.0271 4.8694 9.63699C5.04018 9.30824 5.30824 9.04018 5.63699 8.8694C6.02712 8.66675 6.53966 8.66675 7.56475 8.66675H24.4354C25.4605 8.66675 25.973 8.66675 26.3632 8.8694C26.6919 9.04018 26.96 9.30824 27.1308 9.63699C27.3334 10.0271 27.3334 10.5397 27.3334 11.5647V21.7687C27.3334 22.7938 27.3334 23.3064 27.1308 23.6965C26.96 24.0253 26.6919 24.2933 26.3632 24.4641C25.973 24.6667 25.4605 24.6667 24.4354 24.6667H7.56475C6.53966 24.6667 6.02712 24.6667 5.63699 24.4641C5.30824 24.2933 5.04018 24.0253 4.8694 23.6965C4.66675 23.3064 4.66675 22.7938 4.66675 21.7687V11.5647Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4.66675 14L27.3334 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8.66667" cy="20.6667" r="0.666667" fill="currentColor" />
      </svg>
    </Icon>
  );
};

export default IconCreditCard;
