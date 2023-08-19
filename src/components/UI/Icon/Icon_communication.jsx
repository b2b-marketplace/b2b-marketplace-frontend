import React from 'react';
import Icon from './Icon';

const IconCommunication = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="30"
        viewBox="0 0 28 30"
        fill="none">
        <path
          d="M2.3335 5V22.5L7.9335 18C8.33695 17.6746 8.82848 17.499 9.3335 17.5H18.6668C19.9555 17.5 21.0002 16.3807 21.0002 15V5C21.0002 3.61929 19.9555 2.5 18.6668 2.5H4.66683C3.37816 2.5 2.3335 3.61929 2.3335 5ZM4.66683 17.5V5H18.6668V15H8.5565C8.05141 14.9985 7.55975 15.1741 7.1565 15.5L4.66683 17.5Z"
          fill="currentColor"
        />
        <path
          d="M25.6668 27.5V11.25C25.6668 9.86929 24.6222 8.75 23.3335 8.75V22.5L20.8438 20.5C20.4406 20.1741 19.9489 19.9985 19.4438 20H8.16683C8.16683 21.3807 9.2115 22.5 10.5002 22.5H18.6668C19.1718 22.499 19.6634 22.6746 20.0668 23L25.6668 27.5Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconCommunication;
