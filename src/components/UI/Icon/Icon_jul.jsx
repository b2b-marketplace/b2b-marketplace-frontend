import React from 'react';
import Icon from './Icon';

const IconJul = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M6.04134 2.08325H13.958M6.04134 2.08325L2.08301 6.92122M6.04134 2.08325L6.43717 6.92122M13.958 2.08325L17.9163 6.92122M13.958 2.08325L13.5622 6.92122M2.08301 6.92122L9.99967 17.9166M2.08301 6.92122H6.43717M6.43717 6.92122L9.99967 17.9166M6.43717 6.92122H9.99967H13.5622M17.9163 6.92122L9.99967 17.9166M17.9163 6.92122H15.7393H13.5622M13.5622 6.92122L9.99967 17.9166"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconJul;
