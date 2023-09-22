import React from 'react';
import Icon from './Icon';

const IconDiscountLight = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
      >
        <path
          d="M17.4163 18.3338C17.4163 16.8826 15.4862 16.498 14.9742 17.8558C13.7355 21.1403 12.833 24.0784 12.833 25.667C12.833 30.7296 16.9371 34.8336 21.9997 34.8336C27.0623 34.8336 31.1663 30.7296 31.1663 25.667C31.1663 23.9603 30.1246 20.6958 28.7435 17.1177C26.9544 12.4827 26.0598 10.1652 24.9556 10.0404C24.6023 10.0004 24.2168 10.0722 23.9016 10.2367C22.9163 10.7508 22.9163 13.2785 22.9163 18.3338C22.9163 19.8526 21.6851 21.0838 20.1663 21.0838C18.6476 21.0838 17.4163 19.8526 17.4163 18.3338Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </Icon>
  );
};

export default IconDiscountLight;
