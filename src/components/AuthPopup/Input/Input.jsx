import PropTypes from 'prop-types';
import './Input.scss';
import Selector from '../../UI/Selector/Selector';

const Input = ({ size, type, className, children, text, labelClassName, ...props }) => {
  const inputClass = ['input', `input_size_${size}`, className].join(' ');
  const labelClass = ['input-label', `input-label_size_${size}`, labelClassName].join(' ');
  const isSelect = type === 'select';

  return (
    <label className={labelClass}>
      {
        isSelect
          ? (
            // <select
            //   className={selectClass}
            //   {...props}
            // >
            //   {children}
            // </select>
            <Selector
              // className={selectClass}
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
      {size !== 's' && <span className="input-label__span">{text}</span>}
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