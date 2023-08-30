import Icon from './Icon';

const IconComplele = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <mask id="mask0_1184_280" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
          <path d="M20 38.333C22.4518 38.3362 24.88 37.8548 27.1452 36.9165C29.4103 35.9782 31.4677 34.6015 33.1991 32.8656C34.935 31.1342 36.3117 29.0768 37.25 26.8117C38.1883 24.5465 38.6697 22.1183 38.6665 19.6665C38.6696 17.2147 38.1882 14.7865 37.2499 12.5214C36.3116 10.2562 34.935 8.19885 33.1991 6.46743C31.4677 4.73147 29.4103 3.35479 27.1452 2.41651C24.88 1.47823 22.4518 0.996839 20 1.00002C17.5482 0.99689 15.12 1.4783 12.8549 2.41658C10.5897 3.35486 8.53234 4.73151 6.80093 6.46743C5.06501 8.19885 3.68836 10.2562 2.75008 12.5214C1.8118 14.7865 1.33039 17.2147 1.33351 19.6665C1.33033 22.1183 1.81172 24.5465 2.75 26.8117C3.68829 29.0768 5.06497 31.1342 6.80093 32.8656C8.53234 34.6015 10.5897 35.9781 12.8549 36.9164C15.12 37.8547 17.5482 38.3361 20 38.333Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12.5332 19.6678L18.1331 25.2678L29.333 14.0679" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </mask>
        <g mask="url(#mask0_1184_280)">
          <path d="M-2.40039 -2.73145H42.3992V42.0681H-2.40039V-2.73145Z" fill="white" />
        </g>
      </svg>

    </Icon>
  );
};

export default IconComplele;
