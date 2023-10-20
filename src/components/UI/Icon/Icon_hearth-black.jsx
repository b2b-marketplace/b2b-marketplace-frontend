import React from 'react';

import Icon from './Icon';

const IconHearthBlack = ({ className }) => {
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
          d="M5.93293 18.5444L15.314 27.357C15.6385 27.6618 15.8007 27.8141 15.9987 27.8141C16.1967 27.8141 16.3589 27.6618 16.6834 27.357L26.0645 18.5444C28.6727 16.0943 28.9894 12.0623 26.7958 9.23492L26.3833 8.70328C23.7591 5.32094 18.4915 5.88818 16.6476 9.7517C16.3871 10.2974 15.6103 10.2974 15.3498 9.7517C13.5059 5.88818 8.23833 5.32094 5.61409 8.70328L5.20162 9.23492C3.00796 12.0623 3.32469 16.0943 5.93293 18.5444Z"
          fill="#23252E"
          stroke="#23252E"
          strokeWidth="1.5"
        />
      </svg>
    </Icon>
  );
};

export default IconHearthBlack;
