import React from 'react';

import Icon from './Icon';

const IconHearth = ({ className }) => {
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
          d="M5.93391 18.5443L15.315 27.3569C15.6394 27.6616 15.8017 27.814 15.9997 27.814C16.1977 27.814 16.3599 27.6616 16.6843 27.3569L26.0654 18.5443C28.6737 16.0942 28.9904 12.0622 26.7968 9.2348L26.3843 8.70316C23.76 5.32081 18.4925 5.88806 16.6486 9.75157C16.3881 10.2973 15.6113 10.2973 15.3508 9.75157C13.5068 5.88806 8.23931 5.32081 5.61507 8.70316L5.20259 9.2348C3.00894 12.0622 3.32567 16.0942 5.93391 18.5443Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </Icon>
  );
};

export default IconHearth;
