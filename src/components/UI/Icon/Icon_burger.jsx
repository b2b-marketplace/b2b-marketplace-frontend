import Icon from './Icon';

const IconBurger = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
        <path d="M5.75 6H19.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.75 12H19.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.75 18H19.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default IconBurger;
