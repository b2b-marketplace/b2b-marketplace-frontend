import React from 'react';
import Icon from './Icon';

const IconTelegram = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0002 3.33325C10.8002 3.33325 3.3335 10.7999 3.3335 19.9999C3.3335 29.1999 10.8002 36.6666 20.0002 36.6666C29.2002 36.6666 36.6668 29.1999 36.6668 19.9999C36.6668 10.7999 29.2002 3.33325 20.0002 3.33325ZM27.7335 14.6666C27.4835 17.2999 26.4002 23.6999 25.8502 26.6499C25.6168 27.8999 25.1502 28.3166 24.7168 28.3666C23.7502 28.4499 23.0168 27.7333 22.0835 27.1166C20.6168 26.1499 19.7835 25.5499 18.3668 24.6166C16.7168 23.5333 17.7835 22.9333 18.7335 21.9666C18.9835 21.7166 23.2502 17.8333 23.3335 17.4833C23.3451 17.4302 23.3435 17.3752 23.329 17.3229C23.3145 17.2706 23.2874 17.2227 23.2502 17.1833C23.1502 17.0999 23.0168 17.1333 22.9002 17.1499C22.7502 17.1833 20.4168 18.7333 15.8668 21.7999C15.2002 22.2499 14.6002 22.4833 14.0668 22.4666C13.4668 22.4499 12.3335 22.1333 11.4835 21.8499C10.4335 21.5166 9.61683 21.3333 9.6835 20.7499C9.71683 20.4499 10.1335 20.1499 10.9168 19.8333C15.7835 17.7166 19.0168 16.3166 20.6335 15.6499C25.2668 13.7166 26.2168 13.3833 26.8502 13.3833C26.9835 13.3833 27.3002 13.4166 27.5002 13.5833C27.6668 13.7166 27.7168 13.8999 27.7335 14.0333C27.7168 14.1333 27.7502 14.4333 27.7335 14.6666Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconTelegram;