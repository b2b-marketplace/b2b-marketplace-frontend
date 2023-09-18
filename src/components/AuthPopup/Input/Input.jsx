import PropTypes from 'prop-types';
import './Input.scss';
import Selector from '../../UI/Selector/Selector';

const Input = ({ size, type, className, children, text, labelClassName, isNotError, ...props }) => {
  const inputClass = ['input', `input_size_${size}`, className].join(' ');
  const labelClass = ['input-label', `input-label_size_${size}`, labelClassName].join(' ');
  const isSelect = type === 'select';

  const spanValidClass = `input-label__span${isNotError ? ' input-label__span_valid' : ''}`;

  return (
    <label className={labelClass}>
      {
        isSelect
          ? (
            <Selector
              {...props}
            />
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
      {size !== 's' && <span className={spanValidClass}>{text}</span>}
    </label>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel', 'select']),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  size: 'm',
  type: 'text',
  onChange: undefined,
};

export default Input;