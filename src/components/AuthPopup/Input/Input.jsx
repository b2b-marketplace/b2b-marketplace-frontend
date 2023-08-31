import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ size, type, className, children, text, labelClassName, ...props }) => {
  const inputClass = ['input', `input_size_${size}`, className].join(' ');
  const labelClass = ['input-label', `input-label_size_${size}`, labelClassName].join(' ');
  const isSelect = type === 'select';
  const selectClass = `${inputClass} input_type_select`;

  return (
    <label className={labelClass}>
      {
        isSelect
          ? (
            <select
              className={selectClass}
              {...props}
            >
              {children}
            </select>
          ) : (
            <>
              <input
                className={inputClass}
                type={type}
                {...props}
              />
              {
                children && children
              }
            </>

          )
      }
      <span className="input-label__span">{text}</span>
    </label>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel', 'select']),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  size: 'm',
  type: 'text',
  onChange: undefined,
};

export default Input;