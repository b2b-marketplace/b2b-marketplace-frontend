import React from 'react';
import Icon from './Icon';

const IconArrowTopRight = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg width="31" height="31" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24.25L24.25 8M24.25 8V23.6M24.25 8H8.65" stroke="currentColor" />
      </svg>
    </Icon>
  );
};

export default IconArrowTopRight;
