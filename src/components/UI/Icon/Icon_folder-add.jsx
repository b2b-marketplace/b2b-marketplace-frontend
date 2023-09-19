import React from 'react';
import Icon from './Icon';

const IconFolderAdd = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M25.9998 18.6666V15.3333C25.9998 13.4476 25.9998 12.5048 25.4141 11.919C24.8283 11.3333 23.8855 11.3333 21.9998 11.3333H18.3234C17.5059 11.3333 17.0971 11.3333 16.7296 11.181C16.362 11.0288 16.073 10.7397 15.4949 10.1617L13.8381 8.50482C13.26 7.92676 12.971 7.63773 12.6034 7.48549C12.2359 7.33325 11.8272 7.33325 11.0096 7.33325H8.6665C6.78089 7.33325 5.83808 7.33325 5.25229 7.91904C4.6665 8.50482 4.6665 9.44763 4.6665 11.3333V20.6666C4.6665 22.5522 4.6665 23.495 5.25229 24.0808C5.83808 24.6666 6.78088 24.6666 8.6665 24.6666H19.9998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6665 24.6666H25.9998M25.9998 24.6666H29.3332M25.9998 24.6666V27.9999M25.9998 24.6666V21.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconFolderAdd;
