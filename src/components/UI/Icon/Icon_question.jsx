import React from 'react';
import Icon from './Icon';

const IconQuestion = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none">
        <path
          d="M11.188 25.8089C7.71626 24.9945 5.00547 22.2837 4.1911 18.812C3.60297 16.3047 3.60297 13.6953 4.1911 11.188C5.00546 7.71626 7.71626 5.00546 11.188 4.1911C13.6953 3.60297 16.3047 3.60297 18.812 4.19109C22.2837 5.00546 24.9945 7.71626 25.8089 11.188C26.397 13.6953 26.397 16.3047 25.8089 18.812C24.9945 22.2837 22.2837 24.9945 18.812 25.8089C16.3047 26.397 13.6953 26.397 11.188 25.8089Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="15" cy="19.375" r="1.25" fill="currentColor" />
        <path
          d="M12.5 12.5V11.875C12.5 10.4943 13.6193 9.375 15 9.375V9.375V9.375C16.3807 9.375 17.5 10.4943 17.5 11.875V12.0267C17.5 12.7299 17.2206 13.4044 16.7233 13.9017L15 15.625"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconQuestion;
