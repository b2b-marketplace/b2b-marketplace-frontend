import React from 'react';

import Icon from './Icon';

const IconBasketBlack = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M4.66797 6H7.22645C7.92217 6 8.27003 6 8.53192 6.18876C8.79381 6.37752 8.90381 6.70753 9.12382 7.36754L10.0013 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M23.3346 23.3335H10.7358C10.1247 23.3335 9.81909 23.3335 9.60779 23.2277C9.31463 23.081 9.11201 22.7999 9.06551 22.4754C9.03199 22.2414 9.12862 21.9515 9.32189 21.3717V21.3717C9.53601 20.7294 9.64308 20.4082 9.82446 20.1584C10.0759 19.8121 10.4318 19.5556 10.8398 19.4266C11.1341 19.3335 11.4727 19.3335 12.1498 19.3335H19.3346"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.6774 19.3333H13.9696C12.6904 19.3333 12.0508 19.3333 11.5498 19.003C11.0489 18.6727 10.7969 18.0848 10.293 16.909L9.12421 14.1818C8.31472 12.2929 7.90997 11.3485 8.35458 10.6743C8.79918 10 9.82667 10 11.8816 10H22.1625C24.4615 10 25.6111 10 26.0446 10.7471C26.4782 11.4942 25.9079 12.4923 24.7672 14.4884L23.1504 17.3179C22.5884 18.3013 22.3075 18.793 21.8419 19.0632C21.3763 19.3333 20.81 19.3333 19.6774 19.3333Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="22.6654" cy="26.6668" r="1.33333" fill="#23252E" />
        <circle cx="12.0013" cy="26.6668" r="1.33333" fill="#23252E" />
      </svg>
    </Icon>
  );
};

export default IconBasketBlack;
