import Icon from './Icon';

const IconScales = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6723 5.23512L21.6405 3.26579C22.0508 2.8555 22.6073 2.625 23.1875 2.625C23.7677 2.625 24.3242 2.8555 24.7345 3.26579C25.1448 3.67608 25.3753 4.23255 25.3753 4.81279C25.3753 5.39303 25.1448 5.9495 24.7345 6.35979L7.97067 23.1236C7.35388 23.74 6.59326 24.1931 5.7575 24.442L2.625 25.3753L3.55833 22.2428C3.80716 21.407 4.26024 20.6464 4.87667 20.0296L19.6735 5.23512H19.6723ZM19.6723 5.23512L22.75 8.31279" 
          stroke="currentColor" 
          strokeWidth="1.875" 
          strokeLinecap="round" 
          strokeLinejoin="round" />
      </svg>
    </Icon>
  );
};

export default IconScales;
