import Icon from './Icon';

const IconArrow = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 39.5833L39.5833 12.5M39.5833 12.5V38.5M39.5833 12.5H13.5833" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round" />
      </svg>
    </Icon>
  );
};

export default IconArrow;
