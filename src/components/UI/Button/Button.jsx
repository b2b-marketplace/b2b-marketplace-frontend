import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ mode, border, rotate, size, type, children, ...props }) => {
  const modeClass = `button_${mode}`;
  const isBorder = border ? `${modeClass}_border` : '';
  const isRotate = rotate && size === 'xs' ? 'button_rotate' : '';
  return (
    <button
      type={type}
      className={['button', `button_size_${size}`, modeClass, isBorder, isRotate].join(' ')}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  border: PropTypes.bool,
  rotate: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'primary',
  size: 'm',
  border: true,
  rotate: false,
  onClick: undefined,
};
