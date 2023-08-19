import Icon from './Icon';

const IconGmail = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="50.000000" height="50.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip1184_393">
            <rect id="logos:google-gmail" width="28.000000" height="21.000000" transform="translate(11.000000 14.000000)" fill="white" />
          </clipPath>
        </defs>
        <circle id="Ellipse 17" cx="25.000000" cy="25.000000" r="25.000000" fill="#FFFFFF" />
        <g clip-path="url(#clip1184_393)">
          <path id="Vector" d="M17.364 34.8967L17.364 24.1345L14.009 21.0811L11.0007 19.3865L11.0007 32.9973C11.0007 34.0483 11.8564 34.8967 12.9097 34.8967L17.364 34.8967Z" fill-rule="nonzero" fill="#4285F4" />
          <path id="Vector" d="M32.636 34.8967L37.0903 34.8967C38.1467 34.8967 38.9993 34.0452 38.9993 32.9976L38.9993 19.3867L35.5918 21.3276L32.636 24.1345L32.636 34.8967Z" fill-rule="nonzero" fill="#34A853" />
          <path id="Vector" d="M17.3643 24.1343L16.9077 19.9292L17.3643 15.9045L25.0002 21.6023L32.636 15.9045L33.1467 19.7119L32.636 24.1343L25.0002 29.832L17.3643 24.1343Z" fill-rule="nonzero" fill="#EA4335" />
          <path id="Vector" d="M32.636 15.9045L32.636 24.1343L38.9993 19.3865L38.9993 16.854C38.9993 14.5054 36.3044 13.1665 34.4177 14.5752L32.636 15.9045Z" fill-rule="nonzero" fill="#FBBC04" />
          <path id="Vector" d="M11.001 19.3865L13.9275 21.5703L17.3643 24.1345L17.3643 15.9045L15.5825 14.5752C13.6926 13.1665 11.001 14.5056 11.001 16.854L11.001 19.3865L11.001 19.3865Z" fill-rule="nonzero" fill="#C5221F" />
        </g>
      </svg>
    </Icon>
  );
};

export default IconGmail;
