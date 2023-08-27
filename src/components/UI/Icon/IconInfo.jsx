import Icon from './Icon';

const IconInfo = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip1184_625">
            <rect id="ic:round-info" width="20.000000" height="20.000000" fill="white" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip1184_625)">
          <path id="Vector" d="M10.0005 1.66699C5.40039 1.66699 1.66699 5.40039 1.66699 10.0005C1.66699 14.6001 5.40039 18.3335 10.0005 18.3335C14.6001 18.3335 18.3335 14.6001 18.3335 10.0005C18.3335 5.40039 14.6001 1.66699 10.0005 1.66699ZM10.0005 14.167C9.54199 14.167 9.16699 13.792 9.16699 13.3335L9.16699 10.0005C9.16699 9.54199 9.54199 9.16699 10.0005 9.16699C10.4585 9.16699 10.8335 9.54199 10.8335 10.0005L10.8335 13.3335C10.8335 13.792 10.4585 14.167 10.0005 14.167ZM10.8335 7.50049L9.16699 7.50049L9.16699 5.8335L10.8335 5.8335L10.8335 7.50049Z" fillRule="nonzero" fill="#FFFFFF" />
        </g>
      </svg>

    </Icon>
  );
};

export default IconInfo;
