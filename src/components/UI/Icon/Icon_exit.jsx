import React from 'react';
import Icon from './Icon';

const IconExit = ({ className, ...props }) => {
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
          d="M9.33301 9.5092V7.27867C9.33301 5.13277 9.33301 4.05982 10.0226 3.46174C10.7122 2.86365 11.7744 3.01539 13.8987 3.31887L22.8482 4.59737C25.3043 4.94824 26.5324 5.12368 27.266 5.96957C27.9997 6.81547 27.9997 8.056 27.9997 10.5371V21.4628C27.9997 23.9439 27.9997 25.1845 27.266 26.0303C26.5324 26.8762 25.3043 27.0517 22.8482 27.4025L13.8987 28.6811C11.7744 28.9845 10.7122 29.1363 10.0226 28.5382C9.33301 27.9401 9.33301 26.8671 9.33301 24.7213V22.7546"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.9997 9.33337L21.333 16M21.333 16L15.9997 22.6667M21.333 16H5.33301"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconExit;
