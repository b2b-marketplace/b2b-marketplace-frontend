import { useEffect, useState } from 'react';
import Icon from './Icon';

const IconPassword = ({ className, isVisiblePassword, ...props }) => {
  if (isVisiblePassword) {
    return (
      <Icon {...props} className={`${className}`}>
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.0812 17.6264C21.2452 17.1138 21.3337 16.5674 21.3337 16.0003C21.3337 13.0548 18.9458 10.667 16.0003 10.667C15.4333 10.667 14.8869 10.7555 14.3742 10.9194L15.6386 12.1838C15.7577 12.1727 15.8783 12.167 16.0003 12.167C18.1174 12.167 19.8337 13.8832 19.8337 16.0003C19.8337 16.1223 19.828 16.243 19.8168 16.362L21.0812 17.6264ZM12.9244 13.7123C12.4486 14.3509 12.167 15.1427 12.167 16.0003C12.167 18.1174 13.8832 19.8337 16.0003 19.8337C16.8579 19.8337 17.6498 19.552 18.2884 19.0762L19.3571 20.145C18.4405 20.8883 17.2724 21.3337 16.0003 21.3337C13.0548 21.3337 10.667 18.9458 10.667 16.0003C10.667 14.7282 11.1124 13.5602 11.8557 12.6435L12.9244 13.7123Z" fill="#23252E" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24.4724 21.0176C25.9321 19.7518 27.0766 18.4322 27.7863 17.5396C27.8092 17.5109 27.8324 17.482 27.8558 17.4528C28.1695 17.0619 28.5248 16.619 28.5248 16C28.5248 15.381 28.1695 14.9381 27.8558 14.5472C27.8324 14.518 27.8091 14.4891 27.7863 14.4604C26.8982 13.3434 25.3294 11.558 23.3138 10.0458C21.306 8.53942 18.7823 7.25 16.0002 7.25C14.4725 7.25 13.0228 7.63877 11.6936 8.23877L12.8384 9.38361C13.8529 8.98695 14.9141 8.75 16.0002 8.75C18.3228 8.75 20.5316 9.83368 22.4136 11.2457C24.2879 12.6518 25.7662 14.3299 26.6123 15.3939C26.817 15.6514 26.9207 15.7846 26.9832 15.8918C27.0254 15.964 27.025 15.9846 27.0248 15.9974L27.0248 16L27.0248 16.0026C27.025 16.0154 27.0254 16.036 26.9832 16.1082C26.9207 16.2154 26.817 16.3486 26.6123 16.6061C25.9223 17.4738 24.8118 18.75 23.4089 19.954L24.4724 21.0176ZM22.0408 22.8287L20.9492 21.737C19.4238 22.6391 17.7441 23.25 16.0002 23.25C13.6775 23.25 11.4687 22.1663 9.58673 20.7544C7.71245 19.3482 6.23412 17.6701 5.3881 16.6061C5.1834 16.3486 5.07969 16.2154 5.01713 16.1082C4.97494 16.036 4.97532 16.0154 4.97555 16.0026L4.97559 16L4.97555 15.9974C4.97532 15.9846 4.97494 15.964 5.01713 15.8918C5.07969 15.7846 5.1834 15.6514 5.3881 15.3939C6.23412 14.3299 7.71245 12.6518 9.58674 11.2456C9.75277 11.1211 9.92134 10.9991 10.0923 10.8801L9.01612 9.80395C8.90479 9.88382 8.79492 9.96449 8.68655 10.0458C6.67099 11.558 5.10212 13.3434 4.21401 14.4604C4.19124 14.489 4.16808 14.5179 4.14468 14.547L4.14457 14.5472C3.83088 14.9381 3.47559 15.381 3.47559 16C3.47559 16.619 3.83088 17.0619 4.14457 17.4528C4.168 17.482 4.19121 17.5109 4.21401 17.5396C5.10212 18.6566 6.67099 20.442 8.68655 21.9542C10.6944 23.4606 13.2181 24.75 16.0002 24.75C18.2223 24.75 20.2796 23.9274 22.0408 22.8287Z" fill="#23252E" />
          <path d="M6.66699 2.66699L28.0003 24.0003" stroke="#23252E" strokeWidth="1.5" />
        </svg>
      </Icon>
    );
  }
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16.0003" cy="16.0003" r="4.58333" stroke="#23252E" strokeWidth="1.5" />
        <path d="M27.1991 14.9271C27.5828 15.4096 27.7746 15.6509 27.7746 16C27.7746 16.3491 27.5828 16.5904 27.1991 17.0729C25.465 19.2538 21.1047 24 16 24C10.8953 24 6.53501 19.2538 4.80088 17.0729C4.41723 16.5904 4.22541 16.3491 4.22541 16C4.22541 15.6509 4.41723 15.4096 4.80088 14.9271C6.53501 12.7462 10.8953 8 16 8C21.1047 8 25.465 12.7462 27.1991 14.9271Z" stroke="#23252E" strokeWidth="1.5" />
      </svg>
    </Icon >
  );
};

export default IconPassword;
