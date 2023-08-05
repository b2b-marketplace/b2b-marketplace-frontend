// import './Button.scss';

// export default function Button({ className, children }) {
//   return (
//     <button className={className}>
//       {children}
    
//     </button>
//   );
// }
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, border, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const isBorder = border ? `${mode}--border` : "";
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode, isBorder].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {

  primary: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'm',
  onClick: undefined,
};
