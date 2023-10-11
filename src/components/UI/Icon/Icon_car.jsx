import React from 'react';
import Icon from './Icon';

const IconCar = ({ className }) => {
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
          d="M4.16699 10.8333H6.66699M1.66699 7.49992L3.33366 8.33325L4.39253 5.15664C4.61109 4.50096 4.72037 4.17312 4.92307 3.93074C5.10206 3.7167 5.33192 3.55102 5.59158 3.4489C5.88562 3.33325 6.2312 3.33325 6.92235 3.33325H13.0783C13.7695 3.33325 14.115 3.33325 14.4091 3.4489C14.6687 3.55102 14.8986 3.7167 15.0776 3.93074C15.2803 4.17312 15.3896 4.50096 15.6081 5.15664L16.667 8.33325L18.3337 7.49992M13.3337 10.8333H15.8337M5.66699 8.33325H14.3337C15.7338 8.33325 16.4339 8.33325 16.9686 8.60574C17.439 8.84542 17.8215 9.22787 18.0612 9.69828C18.3337 10.2331 18.3337 10.9331 18.3337 12.3333V14.5833C18.3337 14.9705 18.3337 15.1641 18.3016 15.3251C18.1701 15.9862 17.6533 16.503 16.9921 16.6346C16.8311 16.6666 16.6375 16.6666 16.2503 16.6666H15.8337C14.9132 16.6666 14.167 15.9204 14.167 14.9999C14.167 14.7698 13.9804 14.5833 13.7503 14.5833H6.25033C6.02021 14.5833 5.83366 14.7698 5.83366 14.9999C5.83366 15.9204 5.08747 16.6666 4.16699 16.6666H3.75033C3.36311 16.6666 3.16951 16.6666 3.00851 16.6346C2.34736 16.503 1.83053 15.9862 1.69902 15.3251C1.66699 15.1641 1.66699 14.9705 1.66699 14.5833V12.3333C1.66699 10.9331 1.66699 10.2331 1.93948 9.69828C2.17916 9.22787 2.56161 8.84542 3.03202 8.60574C3.5668 8.33325 4.26686 8.33325 5.66699 8.33325Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconCar;
