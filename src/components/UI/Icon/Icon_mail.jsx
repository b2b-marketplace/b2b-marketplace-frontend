import React from 'react';
import Icon from './Icon';

const IconMail = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <rect 
          x="5.33337" 
          y="8" 
          width="21.3333" 
          height="16" 
          rx="2" 
          stroke="#222222" 
          strokeWidth="1.5"/>     
        <path 
          d="M5.33337 12L15.1056 16.8861C15.6687 17.1676 16.3314 17.1676 16.8945 16.8861L26.6667 12" 
          stroke="#222222" 
          strokeWidth="1.5"/>
      </svg>
    </Icon>
  );
};

export default IconMail;
