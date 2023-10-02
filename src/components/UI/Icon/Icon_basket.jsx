import React from 'react';
import Icon from './Icon';

const IconBasket = ({ className, ...props }) => {
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
          d="M4.66699 6H7.22547C7.9212 6 8.26906 6 8.53094 6.18876C8.79283 6.37752 8.90283 6.70753 9.12284 7.36754L10.0003 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M23.3337 23.3334H10.7349C10.1237 23.3334 9.81812 23.3334 9.60681 23.2276C9.31365 23.0809 9.11104 22.7998 9.06453 22.4752C9.03101 22.2413 9.12764 21.9514 9.32091 21.3716V21.3716C9.53504 20.7292 9.6421 20.4081 9.82348 20.1583C10.0749 19.812 10.4308 19.5555 10.8388 19.4265C11.1331 19.3334 11.4717 19.3334 12.1488 19.3334H19.3337"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.6784 19.3333H13.9706C12.6914 19.3333 12.0518 19.3333 11.5508 19.003C11.0499 18.6727 10.7979 18.0848 10.294 16.909L9.12519 14.1818C8.3157 12.2929 7.91095 11.3485 8.35555 10.6743C8.80016 10 9.82765 10 11.8826 10H22.1635C24.4625 10 25.612 10 26.0456 10.7471C26.4792 11.4942 25.9088 12.4923 24.7682 14.4884L23.1514 17.3179C22.5894 18.3013 22.3085 18.793 21.8429 19.0632C21.3773 19.3333 20.811 19.3333 19.6784 19.3333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="22.6663" cy="26.6667" r="1.33333" fill="currentColor" />
        <circle cx="12.0003" cy="26.6667" r="1.33333" fill="currentColor" />
      </svg>
    </Icon>
  );
};

export default IconBasket;
