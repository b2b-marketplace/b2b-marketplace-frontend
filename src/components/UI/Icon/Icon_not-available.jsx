import Icon from './Icon';

const IconNotAvailable = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="12" fill="#F76C6C" />
        <path d="M12 12L20 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12L12 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default IconNotAvailable;
