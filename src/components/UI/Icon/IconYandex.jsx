import Icon from './Icon';

const IconYandex = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="50.000000" height="50.000000" viewBox="0 0 50 50" fill="none">
        <defs>
          <clipPath id="clip1184_389">
            <rect id="fa6-brands:yandex" width="15.000000" height="30.000000" transform="translate(16.000000 10.000000)" fill="white"/>
          </clipPath>
        </defs>
        <circle id="Ellipse 16" cx="25.000000" cy="25.000000" r="25.000000" fill="#FFFFFF"/>
        <g clipPath="url(#clip1184_389)">
          <path id="Vector" d="M24.9707 28.5039L19.8496 40L16.1172 40L21.7422 27.707C19.0996 26.3652 17.3359 23.9336 17.3359 19.4395C17.3301 13.1465 21.3203 10 26.0605 10L30.8828 10L30.8828 25L30.8828 40L27.6543 40L27.6543 28.5039L24.9707 28.5039ZM27.6543 12.7246L25.9316 12.7246C23.3301 12.7246 20.8105 14.4473 20.8105 19.4395C20.8105 24.2617 23.1191 25.8145 25.9316 25.8145L27.6543 25.8145L27.6543 12.7246Z" fillRule="nonzero" fill="#EA4335"/>
        </g>
      </svg>

    </Icon>
  );
};

export default IconYandex;
