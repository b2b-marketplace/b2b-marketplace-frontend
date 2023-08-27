import React from 'react';
import Icon from './Icon';

const IconMessage = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M25.7675 7.70367C26.6663 9.04886 26.6663 10.9215 26.6663 14.6667C26.6663 18.4119 26.6663 20.2846 25.7675 21.6297C25.3784 22.2121 24.8784 22.7121 24.296 23.1012C23.1209 23.8864 21.5433 23.9857 18.6663 23.9982V24L17.1922 26.9482C16.7009 27.931 15.2985 27.931 14.8071 26.9482L13.333 24V23.9982C10.4561 23.9857 8.87844 23.8864 7.7033 23.1012C7.12095 22.7121 6.62095 22.2121 6.23184 21.6297C5.33301 20.2846 5.33301 18.4119 5.33301 14.6667C5.33301 10.9215 5.33301 9.04886 6.23184 7.70367C6.62095 7.12132 7.12095 6.62131 7.7033 6.2322C9.04849 5.33337 10.9211 5.33337 14.6663 5.33337H17.333C21.0782 5.33337 22.9509 5.33337 24.296 6.2322C24.8784 6.62131 25.3784 7.12132 25.7675 7.70367Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 12L20 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17.3334H16"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconMessage;
