import Icon from './Icon';

const IconClose = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M24 8L8 24" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8L24 24" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Icon>
  );
};

export default IconClose;
