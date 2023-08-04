import React from 'react';
import Icon from './Icon';

const IconProfile = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 1C16.7239 1 18.3772 1.68482 19.5962 2.90381C20.8152 4.12279 21.5 5.77609 21.5 7.5C21.5 9.22391 20.8152 10.8772 19.5962 12.0962C18.3772 13.3152 16.7239 14 15 14C13.2761 14 11.6228 13.3152 10.4038 12.0962C9.18482 10.8772 8.5 9.22391 8.5 7.5C8.5 5.77609 9.18482 4.12279 10.4038 2.90381C11.6228 1.68482 13.2761 1 15 1ZM15 19.75C19.0223 19.75 22.6127 20.5666 25.1606 21.8405C27.768 23.1442 29 24.7607 29 26.25V28C29 28.5523 28.5523 29 28 29H2C1.44772 29 1 28.5523 1 28V26.25C1 24.7607 2.232 23.1442 4.8394 21.8405C7.38725 20.5666 10.9777 19.75 15 19.75Z"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </Icon>
  );
};

export default IconProfile;
