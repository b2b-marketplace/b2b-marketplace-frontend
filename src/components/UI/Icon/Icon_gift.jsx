import React from 'react';
import Icon from './Icon';

const IconGift = ({ className, ...props }) => {
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
          d="M10.0003 5.83341H6.25033C5.69779 5.83341 5.16789 5.61392 4.77719 5.22322C4.38649 4.83252 4.16699 4.30262 4.16699 3.75008C4.16699 3.19755 4.38649 2.66764 4.77719 2.27694C5.16789 1.88624 5.69779 1.66675 6.25033 1.66675C9.16699 1.66675 10.0003 5.83341 10.0003 5.83341ZM10.0003 5.83341H13.7503C14.3029 5.83341 14.8328 5.61392 15.2235 5.22322C15.6142 4.83252 15.8337 4.30262 15.8337 3.75008C15.8337 3.19755 15.6142 2.66764 15.2235 2.27694C14.8328 1.88624 14.3029 1.66675 13.7503 1.66675C10.8337 1.66675 10.0003 5.83341 10.0003 5.83341ZM10.0003 5.83341L10.0003 18.3334M1.66699 11.6667H18.3337M1.66699 8.50008L1.66699 15.6667C1.66699 16.6002 1.66699 17.0669 1.84865 17.4234C2.00844 17.737 2.2634 17.992 2.57701 18.1518C2.93353 18.3334 3.40024 18.3334 4.33366 18.3334L15.667 18.3334C16.6004 18.3334 17.0671 18.3334 17.4236 18.1518C17.7372 17.992 17.9922 17.737 18.152 17.4234C18.3337 17.0669 18.3337 16.6002 18.3337 15.6667V8.50008C18.3337 7.56666 18.3337 7.09995 18.152 6.74343C17.9922 6.42983 17.7372 6.17486 17.4236 6.01507C17.0671 5.83342 16.6004 5.83342 15.667 5.83342L4.33366 5.83342C3.40024 5.83342 2.93353 5.83342 2.57701 6.01507C2.2634 6.17486 2.00844 6.42983 1.84865 6.74343C1.66699 7.09995 1.66699 7.56666 1.66699 8.50008Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconGift;
