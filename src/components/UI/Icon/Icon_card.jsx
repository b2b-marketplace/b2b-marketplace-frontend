import React from 'react';
import Icon from './Icon';

const IconCard = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M4.66797 11.5647C4.66797 10.5397 4.66797 10.0271 4.87062 9.63699C5.0414 9.30824 5.30946 9.04018 5.63821 8.8694C6.02834 8.66675 6.54089 8.66675 7.56597 8.66675H24.4366C25.4617 8.66675 25.9743 8.66675 26.3644 8.8694C26.6931 9.04018 26.9612 9.30824 27.132 9.63699C27.3346 10.0271 27.3346 10.5397 27.3346 11.5647V21.7687C27.3346 22.7938 27.3346 23.3064 27.132 23.6965C26.9612 24.0253 26.6931 24.2933 26.3644 24.4641C25.9743 24.6667 25.4617 24.6667 24.4366 24.6667H7.56597C6.54088 24.6667 6.02834 24.6667 5.63821 24.4641C5.30946 24.2933 5.0414 24.0253 4.87062 23.6965C4.66797 23.3064 4.66797 22.7938 4.66797 21.7687V11.5647Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4.66797 14L27.3346 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="8.72727" cy="20.7273" rx="0.727273" ry="0.727273" fill="currentColor" />
      </svg>
    </Icon>
  );
};

export default IconCard;
