import React from 'react';
import Icon from './Icon';

const IconFireBig = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="32"
        viewBox="0 0 23 32"
        fill="none"
      >
        <path
          d="M6.00087 10.5888C6.00087 8.76169 3.66136 8.27741 3.04068 9.98695C1.53928 14.1223 0.445312 17.8216 0.445312 19.8216C0.445312 26.1957 5.41993 31.3629 11.5564 31.3629C17.6929 31.3629 22.6675 26.1957 22.6675 19.8216C22.6675 17.6729 21.4048 13.5627 19.7307 9.05768C17.5621 3.22195 16.4778 0.304085 15.1394 0.146922C14.7111 0.0966321 14.2439 0.187047 13.8617 0.39416C12.6675 1.04142 12.6675 4.22387 12.6675 10.5888C12.6675 12.501 11.1751 14.0512 9.3342 14.0512C7.49325 14.0512 6.00087 12.501 6.00087 10.5888Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconFireBig;