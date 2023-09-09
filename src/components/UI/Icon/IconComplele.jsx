import Icon from './Icon';

const IconComplele = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_3276_3738" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
          <path d="M17 33C19.1015 33.0027 21.1829 32.5901 23.1245 31.7858C25.066 30.9816 26.8295 29.8016 28.3136 28.3136C29.8016 26.8295 30.9816 25.066 31.7858 23.1245C32.5901 21.1829 33.0027 19.1015 33 17C33.0027 14.8985 32.59 12.8171 31.7858 10.8755C30.9815 8.93399 29.8015 7.17049 28.3136 5.68641C26.8295 4.19843 25.066 3.01841 23.1245 2.21416C21.1829 1.40991 19.1015 0.99729 17 1.00001C14.8985 0.997334 12.8171 1.40997 10.8755 2.21422C8.93399 3.01847 7.17049 4.19847 5.68641 5.68641C4.19847 7.17049 3.01847 8.93399 2.21422 10.8755C1.40997 12.8171 0.997334 14.8985 1.00001 17C0.99729 19.1015 1.40991 21.1829 2.21416 23.1245C3.01841 25.066 4.19843 26.8295 5.68641 28.3136C7.17049 29.8015 8.93399 30.9815 10.8755 31.7858C12.8171 32.59 14.8985 33.0027 17 33Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10.6025 17.0031L15.4025 21.8031L25.0025 12.2031" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </mask>
        <g mask="url(#mask0_3276_3738)">
          <path d="M-2.20117 -2.20117H36.1988V36.1988H-2.20117V-2.20117Z" fill="#23252E" />
        </g>
      </svg>

    </Icon>
  );
};

export default IconComplele;
