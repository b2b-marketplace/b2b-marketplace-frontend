import React from 'react';
import Icon from './Icon';

const IconInfoFill = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none">
        <path
          d="M8.33333 0.666748C3.73333 0.666748 0 4.40008 0 9.00008C0 13.6001 3.73333 17.3334 8.33333 17.3334C12.9333 17.3334 16.6667 13.6001 16.6667 9.00008C16.6667 4.40008 12.9333 0.666748 8.33333 0.666748ZM8.33333 13.1667C7.875 13.1667 7.5 12.7917 7.5 12.3334V9.00008C7.5 8.54175 7.875 8.16675 8.33333 8.16675C8.79167 8.16675 9.16667 8.54175 9.16667 9.00008V12.3334C9.16667 12.7917 8.79167 13.1667 8.33333 13.1667ZM9.16667 6.50008H7.5V4.83341H9.16667V6.50008Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconInfoFill;
