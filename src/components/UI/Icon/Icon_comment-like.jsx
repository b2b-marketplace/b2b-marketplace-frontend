import Icon from './Icon';

const IconCommentLike = ({ className }) => {
  return (
    <Icon className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
          d="M8.35 17.5H5.5C4.94772 17.5 4.5 17.0523 4.5 16.5V11.5C4.5 10.9477 4.94772 10.5 5.5 10.5H8.35C8.43284 10.5 8.5 10.5672 8.5 10.65V17.35C8.5 17.4328 8.43284 17.5 8.35 17.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round" />
        <path
          d="M8.5 11.5L10.3944 7.71115C10.4639 7.57229 10.5 7.41918 10.5 7.26393V5.5C10.5 4.94772 10.9477 4.5 11.5 4.5V4.5C12.6046 4.5 13.5 5.39543 13.5 6.5V10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round" />
        <path
          d="M11.5 10.5H17.4972C18.1637 10.5 18.6437 11.1397 18.4573 11.7796L16.7098 17.7796C16.5855 18.2065 16.1943 18.5 15.7497 18.5H11.9142C11.649 18.5 11.3946 18.3946 11.2071 18.2071L10.7929 17.7929C10.6054 17.6054 10.351 17.5 10.0858 17.5H8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round" />
      </svg>
    </Icon>
  );
};

export default IconCommentLike;
