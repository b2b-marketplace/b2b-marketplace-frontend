import React from 'react';
import Icon from './Icon';

const IconBag = ({ className, ...props }) => {
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
          d="M12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 11.2111C6 10.61 6 10.3094 6.08582 10.026C6.17163 9.74255 6.33835 9.49247 6.6718 8.9923L7.4792 7.7812C8.06049 6.90927 8.35113 6.4733 8.79332 6.23665C9.2355 6 9.75947 6 10.8074 6H21.1926C22.2405 6 22.7645 6 23.2067 6.23665C23.6489 6.4733 23.9395 6.90927 24.5208 7.7812L25.3282 8.9923C25.6616 9.49247 25.8284 9.74255 25.9142 10.026C26 10.3094 26 10.61 26 11.2111V22C26 23.8856 26 24.8284 25.4142 25.4142C24.8284 26 23.8856 26 22 26H10C8.11438 26 7.17157 26 6.58579 25.4142C6 24.8284 6 23.8856 6 22V11.2111Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M6 12.6666H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default IconBag;
