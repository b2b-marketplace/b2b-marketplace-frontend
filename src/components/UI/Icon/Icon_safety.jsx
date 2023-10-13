import React from 'react';

import Icon from './Icon';

const IconSafety = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M16.773 4.87288L25.2577 7.13546C25.6954 7.25219 26 7.64864 26 8.10169V17.4556C26 19.4618 24.9974 21.3352 23.3282 22.4479L16.5547 26.9636C16.2188 27.1875 15.7812 27.1875 15.4453 26.9636L8.6718 22.4479C7.00261 21.3352 6 19.4618 6 17.4556V8.10169C6 7.64864 6.30458 7.25219 6.74234 7.13546L15.227 4.87288C15.7335 4.73782 16.2665 4.73782 16.773 4.87288Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.6667 15.3333L15.1566 17.8231C15.2542 17.9208 15.4125 17.9208 15.5101 17.8231L20 13.3333"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconSafety;
