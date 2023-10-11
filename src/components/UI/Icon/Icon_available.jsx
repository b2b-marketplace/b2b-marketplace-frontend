import Icon from './Icon';

const IconAvailable = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM21.9095 12.4801C22.1747 12.1619 22.1317 11.689 21.8135 11.4238C21.4953 11.1587 21.0223 11.2017 20.7572 11.5199L15.4925 17.8374C15.1506 18.2478 14.9429 18.4943 14.7715 18.6503C14.6925 18.7221 14.6455 18.7513 14.6229 18.7628C14.6167 18.7659 14.6128 18.7675 14.6108 18.7682C14.6096 18.7679 14.6076 18.7673 14.6048 18.7663C14.603 18.7657 14.6008 18.7649 14.5983 18.7639C14.5747 18.7545 14.5253 18.7297 14.4401 18.6653C14.2552 18.5255 14.0261 18.2988 13.6484 17.9211L11.197 15.4697C10.9041 15.1768 10.4292 15.1768 10.1363 15.4697C9.84344 15.7626 9.84344 16.2374 10.1363 16.5303L12.5877 18.9817L12.6212 19.0152C12.9544 19.3484 13.2573 19.6515 13.5354 19.8617C13.8399 20.092 14.2116 20.288 14.6788 20.2668C15.1459 20.2456 15.4983 20.0168 15.7808 19.7599C16.0386 19.5253 16.3129 19.1961 16.6145 18.8341L16.6146 18.8341L16.6449 18.7977L21.9095 12.4801Z"
          fill="#61E083"
        />
      </svg>
    </Icon>
  );
};

export default IconAvailable;
