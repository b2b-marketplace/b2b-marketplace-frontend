import React from 'react';
import Icon from './Icon';

const IconRuble = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="37" viewBox="0 0 28 37" fill="none">
        <path d="M6 36.5C7.1 36.5 8 35.6 8 34.5V30.5H14C15.1 30.5 16 29.6 16 28.5C16 27.4 15.1 26.5 14 26.5H8V22.5H17C23.44 22.5 28.58 16.98 27.94 10.42C27.4 4.7 22.28 0.5 16.52 0.5H6C4.9 0.5 4 1.4 4 2.5V18.5H2C0.9 18.5 0 19.4 0 20.5C0 21.6 0.9 22.5 2 22.5H4V26.5H2C0.9 26.5 0 27.4 0 28.5C0 29.6 0.9 30.5 2 30.5H4V34.5C4 35.6 4.9 36.5 6 36.5ZM17 18.5H8V4.5H17C20.86 4.5 24 7.64 24 11.5C24 15.36 20.86 18.5 17 18.5Z" fill="currentColor"/>
      </svg>
    </Icon>
  );
};

export default IconRuble;
