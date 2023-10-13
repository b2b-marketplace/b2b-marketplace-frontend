import React from 'react';

import Icon from './Icon';

const IconMail = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M5.33301 16C5.33301 14.4518 5.33301 13.6777 5.42803 13.029C6.00433 9.0946 9.09424 6.0047 13.0286 5.4284C13.6774 5.33337 14.4515 5.33337 15.9997 5.33337V5.33337C17.5479 5.33337 18.322 5.33337 18.9707 5.4284C22.9051 6.0047 25.995 9.0946 26.5713 13.029C26.6663 13.6777 26.6663 14.4518 26.6663 16V22.7879C26.6663 24.5559 26.6663 25.4399 26.1462 26.012C26.1035 26.059 26.0586 26.1039 26.0117 26.1466C25.4395 26.6667 24.5555 26.6667 22.7876 26.6667H15.9997C14.4515 26.6667 13.6774 26.6667 13.0286 26.5717C9.09424 25.9954 6.00433 22.9055 5.42803 18.9711C5.33301 18.3224 5.33301 17.5483 5.33301 16V16Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 16L20 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12L16 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconMail;
