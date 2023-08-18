import React from 'react';
import Icon from './Icon';

const IconInfo = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M10.0003 1.66699C5.40033 1.66699 1.66699 5.40033 1.66699 10.0003C1.66699 14.6003 5.40033 18.3337 10.0003 18.3337C14.6003 18.3337 18.3337 14.6003 18.3337 10.0003C18.3337 5.40033 14.6003 1.66699 10.0003 1.66699ZM10.0003 14.167C9.54199 14.167 9.16699 13.792 9.16699 13.3337V10.0003C9.16699 9.54199 9.54199 9.16699 10.0003 9.16699C10.4587 9.16699 10.8337 9.54199 10.8337 10.0003V13.3337C10.8337 13.792 10.4587 14.167 10.0003 14.167ZM10.8337 7.50033H9.16699V5.83366H10.8337V7.50033Z"
          fill="black"
        />
      </svg>
    </Icon>
  );
};

export default IconInfo;