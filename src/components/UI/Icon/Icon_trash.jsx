import React from 'react';
import Icon from './Icon';

const IconTrash = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M12.6641 21L12.6641 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M19.3359 21L19.3359 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M4 10.3359H28H27.3333C25.4477 10.3359 24.5049 10.3359 23.9191 10.9217C23.3333 11.5075 23.3333 12.4503 23.3333 14.3359V23.6693C23.3333 25.5549 23.3333 26.4977 22.7475 27.0835C22.1618 27.6693 21.219 27.6693 19.3333 27.6693H12.6667C10.781 27.6693 9.83824 27.6693 9.25245 27.0835C8.66667 26.4977 8.66667 25.5549 8.66667 23.6693V14.3359C8.66667 12.4503 8.66667 11.5075 8.08088 10.9217C7.49509 10.3359 6.55228 10.3359 4.66667 10.3359H4Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.6693 6.33366C12.6693 6.33366 13.3359 5 16.0026 5C18.6693 5 19.3359 6.33333 19.3359 6.33333"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconTrash;
