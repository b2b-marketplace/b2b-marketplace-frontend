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
          d="M14.8799 3.99318C14.8799 3.8672 14.8301 3.73828 14.7334 3.6416C14.54 3.44824 14.2236 3.44824 14.0303 3.6416L7.41211 10.2598L0.890625 3.73828C0.697266 3.54492 0.380859 3.54492 0.1875 3.73828C-0.00585938 3.93164 -0.00585938 4.24805 0.1875 4.44141L7.06055 11.3174C7.25391 11.5107 7.57031 11.5107 7.76367 11.3174L14.7334 4.34766C14.833 4.24805 14.8799 4.12208 14.8799 3.99318Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconArrowCounter;
