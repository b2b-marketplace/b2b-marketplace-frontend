import React from 'react';
import Icon from './Icon';

const IconHearth = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.125 20.1875L13 20.3125L12.8625 20.1875C6.925 14.8 3 11.2375 3 7.625C3 5.125 4.875 3.25 7.375 3.25C9.3 3.25 11.175 4.5 11.8375 6.2H14.1625C14.825 4.5 16.7 3.25 18.625 3.25C21.125 3.25 23 5.125 23 7.625C23 11.2375 19.075 14.8 13.125 20.1875ZM18.625 0.75C16.45 0.75 14.3625 1.7625 13 3.35C11.6375 1.7625 9.55 0.75 7.375 0.75C3.525 0.75 0.5 3.7625 0.5 7.625C0.5 12.3375 4.75 16.2 11.1875 22.0375L13 23.6875L14.8125 22.0375C21.25 16.2 25.5 12.3375 25.5 7.625C25.5 3.7625 22.475 0.75 18.625 0.75Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconHearth;