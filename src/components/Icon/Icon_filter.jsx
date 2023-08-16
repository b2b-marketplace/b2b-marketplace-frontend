import React from 'react';
import Icon from './Icon';

const IconFilter = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.33333 1H23.6667C24.0203 1 24.3594 1.14048 24.6095 1.39052C24.8595 1.64057 25 1.97971 25 2.33333V4.448C24.9999 4.80159 24.8594 5.14068 24.6093 5.39067L16.056 13.9427C15.8064 14.1929 15.6664 14.5319 15.6667 14.8853V23.292C15.6667 23.4947 15.6205 23.6947 15.5316 23.8768C15.4427 24.059 15.3134 24.2184 15.1536 24.3431C14.9938 24.4678 14.8077 24.5544 14.6095 24.5964C14.4112 24.6384 14.2059 24.6346 14.0093 24.5853L11.3427 23.9187C11.0543 23.8464 10.7984 23.6799 10.6155 23.4456C10.4327 23.2113 10.3333 22.9226 10.3333 22.6253V14.8853C10.3333 14.5317 10.1927 14.1927 9.94267 13.9427L1.38933 5.39067C1.13976 5.14046 0.999722 4.8014 1 4.448V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </Icon>
  );
};

export default IconFilter;
