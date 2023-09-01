import React from 'react';
import Icon from './Icon';

const IconSport = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M3.8124 12.6517C3.32425 12.1635 3.32425 11.3721 3.8124 10.8839C4.30056 10.3958 5.09202 10.3958 5.58017 10.8839L9.11567 14.4194C9.60383 14.9076 9.60383 15.699 9.11567 16.1872C8.62758 16.6754 7.83609 16.6754 7.34794 16.1872L3.8124 12.6517Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M13.3633 4.52425L13.9525 3.93499C14.2779 3.60956 14.8056 3.60956 15.131 3.93499L16.3095 5.1135C16.635 5.43894 16.635 5.96658 16.3095 6.29202L15.7203 6.88127L13.3633 4.52425Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M4.52376 13.363L3.93451 13.9523C3.60907 14.2777 3.60907 14.8054 3.93451 15.1308L5.11302 16.3093C5.43846 16.6348 5.96609 16.6348 6.29153 16.3093L6.88079 15.72L4.52376 13.363Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M10.8837 5.58066C10.3955 5.0925 10.3955 4.30105 10.8837 3.8129C11.3718 3.32474 12.1633 3.32474 12.6515 3.8129L16.187 7.34843C16.6751 7.83658 16.6751 8.62807 16.187 9.11615C15.6988 9.60432 14.9074 9.60432 14.4192 9.11615L10.8837 5.58066Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M6.75879 12.0623L12.0621 6.75903L13.2406 7.93755L7.9373 13.2408L6.75879 12.0623Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconSport;
