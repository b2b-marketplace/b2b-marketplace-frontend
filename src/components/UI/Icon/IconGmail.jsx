import Icon from './Icon';

const IconGmail = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="24.5" stroke="#7B7C82" strokeOpacity="0.2" />
        <g clipPath="url(#clip0_3276_3846)">
          <path
            d="M17.3643 34.8969V24.1347L14.0094 21.0812L11.001 19.3867V32.9977C11.001 34.0485 11.8568 34.8969 12.91 34.8969H17.3643Z"
            fill="#4285F4"
          />
          <path
            d="M32.6357 34.8968H37.09C38.1464 34.8968 38.999 34.0453 38.999 32.9975V19.3867L35.5915 21.3275L32.6357 24.1346V34.8968Z"
            fill="#34A853"
          />
          <path
            d="M17.3637 24.1341L16.9072 19.929L17.3637 15.9043L24.9996 21.6019L32.6356 15.9043L33.1462 19.7117L32.6356 24.1341L24.9996 29.8318L17.3637 24.1341Z"
            fill="#EA4335"
          />
          <path
            d="M32.6357 15.9045V24.1344L38.999 19.3864V16.8541C38.999 14.5055 36.3042 13.1666 34.4176 14.5751L32.6357 15.9045Z"
            fill="#FBBC04"
          />
          <path
            d="M11.001 19.3865L13.9276 21.5702L17.3643 24.1344V15.9046L15.5824 14.5752C13.6925 13.1665 11.001 14.5055 11.001 16.8541V19.3864V19.3865Z"
            fill="#C5221F"
          />
        </g>
        <defs>
          <clipPath id="clip0_3276_3846">
            <rect width="28" height="21" fill="white" transform="translate(11 14)" />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
};

export default IconGmail;
