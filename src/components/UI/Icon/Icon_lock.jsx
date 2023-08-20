import React from 'react';
import Icon from './Icon';

const IconLock = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none">
        <path
          d="M6.5 5C6.5 2.79086 8.29086 1 10.5 1H14.5C16.7091 1 18.5 2.79086 18.5 5V7H19.5C21.1569 7 22.5 8.34315 22.5 10V20C22.5 21.6569 21.1569 23 19.5 23H5.5C3.84315 23 2.5 21.6569 2.5 20V10C2.5 8.34315 3.84315 7 5.5 7H6.5V5ZM16.5 5C16.5 3.89543 15.6046 3 14.5 3H10.5C9.39543 3 8.5 3.89543 8.5 5V7H16.5V5ZM5.5 9C4.94772 9 4.5 9.44772 4.5 10V20C4.5 20.5523 4.94772 21 5.5 21H19.5C20.0523 21 20.5 20.5523 20.5 20V10C20.5 9.44772 20.0523 9 19.5 9H5.5ZM12.5 17C13.8807 17 15 15.8807 15 14.5C15 13.1193 13.8807 12 12.5 12C11.1193 12 10 13.1193 10 14.5C10 15.8807 11.1193 17 12.5 17Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconLock;
