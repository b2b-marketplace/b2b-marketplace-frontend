import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, dark, size, type, children, disabled, pressed, extraClass, ...props }) => {
  const mode = primary ? 'button_primary' : 'button_secondary';
  const isDark = dark ? `${mode}_dark` : '';
  const isPressed = pressed ? `${mode}_pressed` : '';
  return (
    <button
      disabled={disabled}
      type={type}
      className={['button', `button_size_${size}`, mode, isDark, isPressed, extraClass || ""].join(' ')}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  dark: false,
  size: 'm',
  disabled: false,
  extraClass: "",
  onClick: undefined,
};
