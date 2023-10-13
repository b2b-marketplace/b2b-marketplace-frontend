import React from 'react';

import Icon from './Icon';

const IconDiscountLight = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M12.6654 13.3336C12.6654 12.2783 11.2617 11.9985 10.8893 12.986C9.98841 15.3747 9.33203 17.5116 9.33203 18.6669C9.33203 22.3488 12.3168 25.3335 15.9987 25.3335C19.6806 25.3335 22.6654 22.3488 22.6654 18.6669C22.6654 17.4257 21.9077 15.0515 20.9033 12.4492C19.6021 9.0783 18.9516 7.39284 18.1485 7.30206C17.8915 7.27301 17.6112 7.32524 17.3819 7.44487C16.6654 7.81875 16.6654 9.65705 16.6654 13.3336C16.6654 14.4382 15.7699 15.3336 14.6654 15.3336C13.5608 15.3336 12.6654 14.4382 12.6654 13.3336Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </Icon>
  );
};

export default IconDiscountLight;
