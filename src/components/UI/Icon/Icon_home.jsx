import React from 'react';
import Icon from './Icon';

const IconHome = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path
          d="M10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67077 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H6.83333C7.06669 17.5001 7.18337 17.5001 7.2725 17.4547C7.3509 17.4147 7.41464 17.351 7.45459 17.2726C7.5 17.1835 7.5 17.0668 7.5 16.8334V11.3334C7.5 10.8667 7.5 10.6334 7.59083 10.4551C7.67072 10.2983 7.79821 10.1708 7.95501 10.0909C8.13327 10.0001 8.36662 10.0001 8.83333 10.0001H11.1667C11.6334 10.0001 11.8667 10.0001 12.045 10.0909C12.2018 10.1708 12.3293 10.2983 12.4092 10.4551C12.5 10.6334 12.5 10.8667 12.5 11.3334V16.8334C12.5 17.0668 12.5 17.1835 12.5454 17.2726C12.5854 17.351 12.6491 17.4147 12.7275 17.4547C12.8166 17.5001 12.9333 17.5001 13.1667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67077 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default IconHome;