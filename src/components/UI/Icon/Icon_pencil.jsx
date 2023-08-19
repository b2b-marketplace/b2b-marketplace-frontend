import React from 'react';
import Icon from './Icon';

const IconPencil = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none">
        <path
          d="M21.0775 5.60857L23.1862 3.49857C23.6258 3.05897 24.2221 2.81201 24.8438 2.81201C25.4654 2.81201 26.0617 3.05897 26.5013 3.49857C26.9408 3.93817 27.1878 4.53439 27.1878 5.15607C27.1878 5.77775 26.9408 6.37397 26.5013 6.81357L8.54 24.7748C7.87916 25.4353 7.06421 25.9207 6.16875 26.1873L2.8125 27.1873L3.8125 23.8311C4.0791 22.9356 4.56454 22.1207 5.225 21.4598L21.0788 5.60857H21.0775ZM21.0775 5.60857L24.375 8.90607"
          stroke="black"
          stroke-width="1.875"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconPencil;
