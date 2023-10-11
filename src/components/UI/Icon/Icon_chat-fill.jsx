import React from 'react';
import Icon from './Icon';

const IconChatFill = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3822 22.0021 8.78829 21.6102 7.35601 20.858L3.06601 21.975C2.92267 22.0123 2.77205 22.0116 2.6291 21.9728C2.48615 21.934 2.35582 21.8585 2.25102 21.7538C2.14623 21.6491 2.07062 21.5188 2.03168 21.3759C1.99273 21.233 1.99181 21.0824 2.02901 20.939L3.14501 16.65C2.39081 15.2162 1.99778 13.6201 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM13.252 13H8.75001L8.64801 13.007C8.4685 13.0317 8.304 13.1206 8.18492 13.2571C8.06584 13.3937 8.00024 13.5688 8.00024 13.75C8.00024 13.9312 8.06584 14.1063 8.18492 14.2429C8.304 14.3794 8.4685 14.4683 8.64801 14.493L8.75001 14.5H13.252L13.353 14.493C13.5325 14.4683 13.697 14.3794 13.8161 14.2429C13.9352 14.1063 14.0008 13.9312 14.0008 13.75C14.0008 13.5688 13.9352 13.3937 13.8161 13.2571C13.697 13.1206 13.5325 13.0317 13.353 13.007L13.252 13ZM15.25 9.5H8.75001L8.64801 9.507C8.4685 9.5317 8.304 9.62055 8.18492 9.75714C8.06584 9.89372 8.00024 10.0688 8.00024 10.25C8.00024 10.4312 8.06584 10.6063 8.18492 10.7429C8.304 10.8794 8.4685 10.9683 8.64801 10.993L8.75001 11H15.25L15.352 10.993C15.5315 10.9683 15.696 10.8794 15.8151 10.7429C15.9342 10.6063 15.9998 10.4312 15.9998 10.25C15.9998 10.0688 15.9342 9.89372 15.8151 9.75714C15.696 9.62055 15.5315 9.5317 15.352 9.507L15.25 9.5Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconChatFill;
