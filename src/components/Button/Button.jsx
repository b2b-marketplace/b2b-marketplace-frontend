import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, border, rotate, size, type, children, ...props }) => {
  const mode = primary ? 'button__primary' : 'button__secondary';
  const isBorder = border ? `${mode}_border` : '';
  const isRotate = rotate && size === 'xs' ? 'button_rotate' : '';
  return (
    <button
      type={type}
      className={['button', `button_size_${size}`, mode, isBorder, isRotate].join(' ')}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxx','xxxl', 'xxxxl']),
  border: PropTypes.bool,
  rotate: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'm',
  border: true,
  rotate: false,
  onClick: undefined,
};
