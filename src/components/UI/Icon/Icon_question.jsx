import React from 'react';
import Icon from './Icon';

const IconQuestion = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <circle cx="16" cy="16" r="12" stroke="#currentColor" strokeWidth="1.5" />
        <circle cx="16.0859" cy="24.082" r="0.75" fill="#currentColor" />
        <path
          d="M16 21.3334V20.191C16 19.2387 16.4759 18.3494 17.2683 17.8212L18.0662 17.2892C19.2743 16.4838 20 15.1279 20 13.676V13.3334C20 11.1242 18.2091 9.33337 16 9.33337V9.33337C13.7909 9.33337 12 11.1242 12 13.3334V13.3334"
          stroke="#currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconQuestion;
