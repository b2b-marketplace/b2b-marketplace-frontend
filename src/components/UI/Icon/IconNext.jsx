import Icon from './Icon';

const IconNext = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="97"
        height="97"
        viewBox="0 0 97 97"
        fill="none"
      >
        <circle cx="48.5" cy="48.5" r="46" transform="rotate(-180 48.5 48.5)" stroke="white" />
        <path
          d="M52.1594 33.5543C52.0511 33.45 51.9232 33.3681 51.7832 33.3133C51.6432 33.2584 51.4937 33.2317 51.3434 33.2346C51.0397 33.2405 50.7508 33.3667 50.5403 33.5856C50.3297 33.8044 50.2147 34.098 50.2206 34.4016C50.2265 34.7053 50.3527 34.9942 50.5716 35.2047L63.2057 47.3579L34.5739 47.3579C34.2702 47.3579 33.979 47.4786 33.7642 47.6933C33.5495 47.9081 33.4288 48.1993 33.4288 48.503C33.4288 48.8067 33.5495 49.098 33.7642 49.3127C33.979 49.5275 34.2702 49.6481 34.5739 49.6481L63.2027 49.6481L50.5701 61.7983C50.4617 61.9025 50.3749 62.0271 50.3147 62.1649C50.2545 62.3027 50.222 62.451 50.2191 62.6014C50.2162 62.7517 50.2429 62.9012 50.2977 63.0412C50.3526 63.1812 50.4345 63.3091 50.5388 63.4174C50.643 63.5258 50.7676 63.6126 50.9054 63.6728C51.0432 63.733 51.1915 63.7655 51.3419 63.7684C51.4922 63.7713 51.6417 63.7446 51.7817 63.6898C51.9217 63.6349 52.0495 63.553 52.1579 63.4487L66.5524 49.6023C66.7005 49.4599 66.8182 49.289 66.8986 49.1C66.979 48.911 67.0205 48.7077 67.0205 48.5023C67.0205 48.2969 66.979 48.0936 66.8986 47.9045C66.8182 47.7155 66.7005 47.5447 66.5524 47.4022L52.1594 33.5543Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
};

export default IconNext;
