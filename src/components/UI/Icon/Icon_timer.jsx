import React from 'react';

import Icon from './Icon';

const IconTimer = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <circle cx="15.9987" cy="18.6667" r="10.6667" stroke="currentColor" strokeWidth="2" />
        <path d="M16 18.6667L16 14.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M23.332 10L25.332 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M13.4255 3.16087C13.5774 3.01911 13.9122 2.89385 14.3779 2.80451C14.8437 2.71517 15.4143 2.66675 16.0013 2.66675C16.5883 2.66675 17.1589 2.71517 17.6247 2.80451C18.0904 2.89385 18.4252 3.01911 18.5771 3.16087"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconTimer;
