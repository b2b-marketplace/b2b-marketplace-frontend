import React from 'react';
import Icon from './Icon';

const IconPlus = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M20 10L20 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 20L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default IconPlus;
