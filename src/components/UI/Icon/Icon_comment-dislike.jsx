import Icon from './Icon';

const IconCommentDislike = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.65 6.5L18.5 6.5C19.0523 6.5 19.5 6.94772 19.5 7.5L19.5 12.5C19.5 13.0523 19.0523 13.5 18.5 13.5L15.65 13.5C15.5672 13.5 15.5 13.4328 15.5 13.35L15.5 6.65C15.5 6.56716 15.5672 6.5 15.65 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.5 12.5L13.6056 16.2889C13.5361 16.4277 13.5 16.5808 13.5 16.7361L13.5 18.5C13.5 19.0523 13.0523 19.5 12.5 19.5V19.5C11.3954 19.5 10.5 18.6046 10.5 17.5L10.5 13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.5 13.5L6.5028 13.5C5.83629 13.5 5.35632 12.8603 5.54269 12.2204L7.29019 6.22037C7.41451 5.79352 7.80571 5.5 8.2503 5.5L12.0858 5.5C12.351 5.5 12.6054 5.60536 12.7929 5.79289L13.2071 6.20711C13.3946 6.39464 13.649 6.5 13.9142 6.5L15.5 6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
};

export default IconCommentDislike;
