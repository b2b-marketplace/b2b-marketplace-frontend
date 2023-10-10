import Icon from './Icon';

const IconNotVerified = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" transform="translate(1 1)" fill="transparent" />
        <path
          d="M15 1V3.8M22 2.876L20.6 5.3008M27.124 8L24.6992 9.4M29 15H26.2M27.124 22L24.6992 20.6M22 27.124L20.6 24.6992M15 29V26.2M8 27.124L9.4 24.6992M2.876 22L5.3008 20.6M1 15H3.8M2.876 8L5.3008 9.4M8 2.876L9.4 5.3008"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <defs>
          <radialGradient
            id="paint0_angular_1534_1036"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15 15) rotate(81.8532) scale(14.1427 14.1461)"
          >
            <stop stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </Icon>
  );
};

export default IconNotVerified;
