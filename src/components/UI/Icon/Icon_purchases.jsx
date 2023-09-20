import React from 'react';
import Icon from './Icon';

const IconPurchases = ({ className, ...props }) => {
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
          d="M8 14.9901C8 14.1726 8 13.7639 8.15224 13.3963C8.30448 13.0288 8.59351 12.7397 9.17157 12.1617L10.8284 10.5048C11.4065 9.92676 11.6955 9.63773 12.0631 9.48549C12.4306 9.33325 12.8394 9.33325 13.6569 9.33325H18.3431C19.1606 9.33325 19.5694 9.33325 19.9369 9.48549C20.3045 9.63773 20.5935 9.92676 21.1716 10.5048L22.8284 12.1617C23.4065 12.7397 23.6955 13.0288 23.8478 13.3963C24 13.7639 24 14.1726 24 14.9901V22.6666C24 24.5522 24 25.495 23.4142 26.0808C22.8284 26.6666 21.8856 26.6666 20 26.6666H12C10.1144 26.6666 9.17157 26.6666 8.58579 26.0808C8 25.495 8 24.5522 8 22.6666V14.9901Z"
          stroke="#7B7C82"
          strokeWidth="1.5"
        />
        <path
          d="M12 9.33341L8.13868 6.7592C8.0547 6.70321 7.9453 6.70321 7.86133 6.7592L4.25373 9.16426C4.12247 9.25177 4.10408 9.43749 4.21563 9.54905L7.72386 13.0573C7.90067 13.2341 8 13.4739 8 13.7239V13.7239C8 14.2446 8.42211 14.6667 8.94281 14.6667H23.0572C23.5779 14.6667 24 14.2446 24 13.7239V13.7239C24 13.4739 24.0993 13.2341 24.2761 13.0573L27.7844 9.54905C27.8959 9.43749 27.8775 9.25177 27.7463 9.16426L24.1387 6.7592C24.0547 6.70321 23.9453 6.70321 23.8613 6.7592L20 9.33341"
          stroke="#7B7C82"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconPurchases;