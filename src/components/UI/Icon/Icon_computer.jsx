import React from 'react';
import Icon from './Icon';

const IconComputer = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6.66699 17.5H13.3337M10.0003 14.1667V17.5M5.66699 14.1667H14.3337C15.7338 14.1667 16.4339 14.1667 16.9686 13.8942C17.439 13.6545 17.8215 13.272 18.0612 12.8016C18.3337 12.2669 18.3337 11.5668 18.3337 10.1667V6.5C18.3337 5.09987 18.3337 4.3998 18.0612 3.86502C17.8215 3.39462 17.439 3.01217 16.9686 2.77248C16.4339 2.5 15.7338 2.5 14.3337 2.5H5.66699C4.26686 2.5 3.5668 2.5 3.03202 2.77248C2.56161 3.01217 2.17916 3.39462 1.93948 3.86502C1.66699 4.3998 1.66699 5.09987 1.66699 6.5V10.1667C1.66699 11.5668 1.66699 12.2669 1.93948 12.8016C2.17916 13.272 2.56161 13.6545 3.03202 13.8942C3.5668 14.1667 4.26686 14.1667 5.66699 14.1667Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconComputer;