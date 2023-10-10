import React from 'react';
import Icon from './Icon';

const IconCalendar = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M2.5 15C2.5 10.2863 2.5 7.92875 3.965 6.465C5.42875 5 7.78625 5 12.5 5H17.5C22.2137 5 24.5712 5 26.035 6.465C27.5 7.92875 27.5 10.2863 27.5 15V17.5C27.5 22.2137 27.5 24.5712 26.035 26.035C24.5712 27.5 22.2137 27.5 17.5 27.5H12.5C7.78625 27.5 5.42875 27.5 3.965 26.035C2.5 24.5712 2.5 22.2137 2.5 17.5V15Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M8.75 5V3.125M21.25 5V3.125M3.125 11.25H26.875"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M22.5 21.25C22.5 21.5815 22.3683 21.8995 22.1339 22.1339C21.8995 22.3683 21.5815 22.5 21.25 22.5C20.9185 22.5 20.6005 22.3683 20.3661 22.1339C20.1317 21.8995 20 21.5815 20 21.25C20 20.9185 20.1317 20.6005 20.3661 20.3661C20.6005 20.1317 20.9185 20 21.25 20C21.5815 20 21.8995 20.1317 22.1339 20.3661C22.3683 20.6005 22.5 20.9185 22.5 21.25ZM22.5 16.25C22.5 16.5815 22.3683 16.8995 22.1339 17.1339C21.8995 17.3683 21.5815 17.5 21.25 17.5C20.9185 17.5 20.6005 17.3683 20.3661 17.1339C20.1317 16.8995 20 16.5815 20 16.25C20 15.9185 20.1317 15.6005 20.3661 15.3661C20.6005 15.1317 20.9185 15 21.25 15C21.5815 15 21.8995 15.1317 22.1339 15.3661C22.3683 15.6005 22.5 15.9185 22.5 16.25ZM16.25 21.25C16.25 21.5815 16.1183 21.8995 15.8839 22.1339C15.6495 22.3683 15.3315 22.5 15 22.5C14.6685 22.5 14.3505 22.3683 14.1161 22.1339C13.8817 21.8995 13.75 21.5815 13.75 21.25C13.75 20.9185 13.8817 20.6005 14.1161 20.3661C14.3505 20.1317 14.6685 20 15 20C15.3315 20 15.6495 20.1317 15.8839 20.3661C16.1183 20.6005 16.25 20.9185 16.25 21.25ZM16.25 16.25C16.25 16.5815 16.1183 16.8995 15.8839 17.1339C15.6495 17.3683 15.3315 17.5 15 17.5C14.6685 17.5 14.3505 17.3683 14.1161 17.1339C13.8817 16.8995 13.75 16.5815 13.75 16.25C13.75 15.9185 13.8817 15.6005 14.1161 15.3661C14.3505 15.1317 14.6685 15 15 15C15.3315 15 15.6495 15.1317 15.8839 15.3661C16.1183 15.6005 16.25 15.9185 16.25 16.25ZM10 21.25C10 21.5815 9.8683 21.8995 9.63388 22.1339C9.39946 22.3683 9.08152 22.5 8.75 22.5C8.41848 22.5 8.10054 22.3683 7.86612 22.1339C7.6317 21.8995 7.5 21.5815 7.5 21.25C7.5 20.9185 7.6317 20.6005 7.86612 20.3661C8.10054 20.1317 8.41848 20 8.75 20C9.08152 20 9.39946 20.1317 9.63388 20.3661C9.8683 20.6005 10 20.9185 10 21.25ZM10 16.25C10 16.5815 9.8683 16.8995 9.63388 17.1339C9.39946 17.3683 9.08152 17.5 8.75 17.5C8.41848 17.5 8.10054 17.3683 7.86612 17.1339C7.6317 16.8995 7.5 16.5815 7.5 16.25C7.5 15.9185 7.6317 15.6005 7.86612 15.3661C8.10054 15.1317 8.41848 15 8.75 15C9.08152 15 9.39946 15.1317 9.63388 15.3661C9.8683 15.6005 10 15.9185 10 16.25Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconCalendar;
