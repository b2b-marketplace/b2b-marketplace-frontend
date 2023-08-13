import React from 'react';
import Icon from './Icon';

const IconArrowCounter = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none">
        <path
          d="M11.0073 14.8799C11.1333 14.8799 11.2622 14.8301 11.3589 14.7334C11.5522 14.54 11.5522 14.2236 11.3589 14.0303L4.74072 7.41211L11.2622 0.890625C11.4556 0.697266 11.4556 0.380859 11.2622 0.1875C11.0688 -0.00585938 10.7524 -0.00585938 10.5591 0.1875L3.68311 7.06055C3.48975 7.25391 3.48975 7.57031 3.68311 7.76367L10.6528 14.7334C10.7524 14.833 10.8784 14.8799 11.0073 14.8799Z"
          fill="black"
        />
      </svg>
    </Icon>
  );
};

export default IconArrowCounter;
