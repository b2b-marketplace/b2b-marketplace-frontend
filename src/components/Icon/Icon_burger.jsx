import React from 'react';
import Icon from './Icon';

const IconBurger = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="18"
        viewBox="0 0 30 18"
        fill="none">
        <rect y="0.5" width="30" height="1" fill="white" />
        <rect y="8.5" width="30" height="1" fill="white" />
        <rect y="16.5" width="30" height="1" fill="white" />
      </svg>
    </Icon>
  );
};

export default IconBurger;
