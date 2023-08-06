import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, border, size, label, iconType, ...props }) => {
  const mode = primary ? 'button__primary' : 'button__secondary';
  const isBorder = border ? `${mode}_border` : '';
  // (size === 'l') ?
  return (
    <button
      type="button"
      className={['button', `button_size_${size}`, mode, isBorder].join(' ')}
      {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
  label: PropTypes.string.isRequired,
  border: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'm',
  border: true,
  onClick: undefined,
};
