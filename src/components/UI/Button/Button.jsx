import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, rotate, size, type, children, disabled, pressed, extraClass, ...props }) => {
  const mode = primary ? 'button_primary' : 'button_secondary';
  const isRotate = rotate && size === 'xs' ? 'button_rotate' : '';
  const isPressed = pressed ? `${mode}_pressed` : ''; 
  return (
    <button
      disabled={disabled}
      type={type}
      className={['button', `button_size_${size}`, mode, isRotate, isPressed, extraClass || ""].join(' ')}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  rotate: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: 'm',
  rotate: false,
  disabled: false,
  extraClass: "",
  onClick: undefined,
};
