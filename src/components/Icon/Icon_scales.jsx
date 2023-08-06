import React from 'react';
import Icon from './Icon';

const IconScales = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.21439 11.7856L26.7858 1.07129M15.0001 6.42843V1.07129M11.7858 23.5713L6.42868 10.3284L1.07153 23.5713C1.07153 24.9921 1.63594 26.3547 2.6406 27.3594C3.64526 28.364 5.00787 28.9284 6.42868 28.9284C7.84948 28.9284 9.21209 28.364 10.2167 27.3594C11.2214 26.3547 11.7858 24.9921 11.7858 23.5713ZM28.9287 14.9999L23.5715 2.52843L18.2144 14.9999C18.2144 16.4207 18.7788 17.7833 19.7835 18.7879C20.7881 19.7926 22.1507 20.357 23.5715 20.357C24.9923 20.357 26.3549 19.7926 27.3596 18.7879C28.3643 17.7833 28.9287 16.4207 28.9287 14.9999Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconScales;