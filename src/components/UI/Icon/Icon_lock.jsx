import React from 'react';
import Icon from './Icon';

const IconLock = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none">
        <path
          d="M1 13.6666C1 11.781 1 10.8382 1.58579 10.2524C2.17157 9.66663 3.11438 9.66663 5 9.66663H17C18.8856 9.66663 19.8284 9.66663 20.4142 10.2524C21 10.8382 21 11.781 21 13.6666V18.3333C21 21.1617 21 22.5759 20.1213 23.4546C19.2426 24.3333 17.8284 24.3333 15 24.3333H7C4.17157 24.3333 2.75736 24.3333 1.87868 23.4546C1 22.5759 1 21.1617 1 18.3333V13.6666Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17 9.66663V7.66663C17 6.73762 17 6.27312 16.9384 5.88445C16.5996 3.74499 14.9216 2.06704 12.7822 1.72818C12.3935 1.66663 11.929 1.66663 11 1.66663V1.66663C10.071 1.66663 9.60649 1.66663 9.21783 1.72818C7.07837 2.06704 5.40042 3.74499 5.06156 5.88445C5 6.27312 5 6.73762 5 7.66663V9.66663"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconLock;
