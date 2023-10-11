import React from 'react';
import Icon from './Icon';

const IconTextile = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M2.91699 8.33342L8.33366 2.91675M11.667 17.0834L17.0837 11.6667M17.0837 5.83342L14.167 8.75008M5.41699 17.0834L11.667 10.8334M2.91699 13.7501L6.25033 10.4167M13.7503 2.91675L8.33366 8.33342M4.58366 2.91675H15.417C16.3375 2.91675 17.0837 3.66294 17.0837 4.58341V15.4167C17.0837 16.3372 16.3375 17.0834 15.417 17.0834H4.58366C3.66318 17.0834 2.91699 16.3372 2.91699 15.4167V4.58341C2.91699 3.66294 3.66318 2.91675 4.58366 2.91675Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconTextile;
