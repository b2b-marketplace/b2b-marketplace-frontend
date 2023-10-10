import Icon from './Icon';

const IconYandex = ({ className, ...props }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="white" />
        <circle cx="25" cy="25" r="24.5" stroke="#7B7C82" strokeOpacity="0.2" />
        <g clipPath="url(#clip0_3276_3842)">
          <path
            d="M24.9707 28.5039L19.8496 40H16.1172L21.7422 27.707C19.0996 26.3652 17.3359 23.9336 17.3359 19.4395C17.3301 13.1465 21.3203 10 26.0605 10H30.8828V40H27.6543V28.5039H24.9707ZM27.6543 12.7246H25.9316C23.3301 12.7246 20.8105 14.4473 20.8105 19.4395C20.8105 24.2617 23.1191 25.8145 25.9316 25.8145H27.6543V12.7246Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_3276_3842">
            <rect width="15" height="30" fill="white" transform="translate(16 10)" />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
};

export default IconYandex;
