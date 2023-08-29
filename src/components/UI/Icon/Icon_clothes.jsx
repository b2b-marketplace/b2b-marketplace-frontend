import React from 'react';
import Icon from './Icon';

const IconClothes = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M12.1241 2.5C12.1241 2.5 11.2978 2.78846 10 2.78846C8.70218 2.78846 7.87589 2.5 7.87589 2.5C7.74533 2.5 7.6157 2.52195 7.49249 2.5649L1.875 4.51923L2.47821 7.69231L4.2512 7.89135C4.46832 7.91577 4.66827 8.02048 4.81133 8.18467C4.95439 8.34886 5.0301 8.56053 5.02344 8.77764L4.77679 17.5H15.2232L14.9766 8.77764C14.9699 8.56053 15.0456 8.34886 15.1887 8.18467C15.3317 8.02048 15.5317 7.91577 15.7488 7.89135L17.5218 7.69231L18.125 4.51923L12.5075 2.5649C12.3843 2.52195 12.2547 2.5 12.1241 2.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 3.125C12.3534 3.66267 12.0288 4.138 11.5766 4.47708C11.1245 4.81617 10.5703 5 10 5C9.42974 5 8.87547 4.81617 8.42336 4.47708C7.97124 4.138 7.64663 3.66267 7.5 3.125"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconClothes;
