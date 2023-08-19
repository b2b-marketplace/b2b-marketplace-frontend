import Icon from './Icon';

const IconClose = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="21.055664" height="21.055664" viewBox="0 0 21.0557 21.0557" fill="none" >
        <defs/>
        <path id="Vector" d="M20.0515 20.0515L1.00391 1.00391M20.0515 1.00391L1.00391 20.0515" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </Icon>
  );
};

export default IconClose;
