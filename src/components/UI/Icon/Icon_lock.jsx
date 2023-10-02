import React from 'react';
import Icon from './Icon';

const IconLock = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 16.6668C6 14.7811 6 13.8383 6.58579 13.2525C7.17157 12.6667 8.11438 12.6667 10 12.6667H22C23.8856 12.6667 24.8284 12.6667 25.4142 13.2525C26 13.8383 26 14.7811 26 16.6667V21.3334C26 24.1618 26 25.5761 25.1213 26.4547C24.2426 27.3334 22.8284 27.3334 20 27.3334H12C9.17157 27.3334 7.75736 27.3334 6.87868 26.4547C6 25.5761 6 24.1618 6 21.3334V16.6668Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M22 12.6667V10.6667C22 9.73774 22 9.27324 21.9384 8.88458C21.5996 6.74511 19.9216 5.06716 17.7822 4.72831C17.3935 4.66675 16.929 4.66675 16 4.66675V4.66675C15.071 4.66675 14.6065 4.66675 14.2178 4.72831C12.0784 5.06716 10.4004 6.74511 10.0616 8.88458C10 9.27324 10 9.73774 10 10.6667V12.6667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconLock;
