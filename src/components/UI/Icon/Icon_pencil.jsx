import React from 'react';
import Icon from './Icon';

const IconPencil = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <path
          d="M21.9838 6.7535L24.0601 4.67599C24.4929 4.24316 25.0799 4 25.692 4C26.3041 4 26.8912 4.24316 27.324 4.67599C27.7568 5.10882 28 5.69586 28 6.30797C28 6.92008 27.7568 7.50712 27.324 7.93995L9.63931 25.6246C8.98864 26.2749 8.18624 26.7529 7.30457 27.0154L4 28L4.9846 24.6954C5.24709 23.8138 5.72507 23.0114 6.37535 22.3607L21.985 6.7535H21.9838ZM21.9838 6.7535L25.2305 10.0002"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconPencil;
