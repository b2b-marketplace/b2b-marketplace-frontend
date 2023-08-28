import React from 'react';
import Icon from './Icon';

const IconScales = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="24" y="9.33337" width="5.33333" height="17.3333" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="13.333" y="17.3334" width="5.33333" height="9.33333" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="2.66699" y="12" width="5.33333" height="14.6667" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </Icon>
  );
};

export default IconScales;
