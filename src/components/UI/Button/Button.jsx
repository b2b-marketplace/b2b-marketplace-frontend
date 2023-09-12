import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({
  primary,
  dark,
  rotate,
  size,
  type,
  children,
  disabled,
  pressed,
  extraClass,
  ...props
}) => {
  const mode = primary ? 'button_primary' : 'button_secondary';
  const isDark = dark ? `${mode}_dark` : '';
  const isRotate = rotate && size === 'xs' ? 'button_rotate' : '';
  const isPressed = pressed ? `${mode}_pressed` : '';
  return (
    <button
      disabled={disabled}
      type={type}
      className={[
        'button',
        `button_size_${size}`,
        mode,
        isDark,
        isRotate,
        isPressed,
        extraClass || '',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  rotate: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  dark: false,
  size: 'm',
  rotate: false,
  disabled: false,
  extraClass: '',
  onClick: undefined,
};
