import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AppInput.scss';

/**
 * Компонент для отображения поля ввода с различными настройками и стилями.
 *
 * @component
 * @param {Object} props - Параметры компонента.
 * @param {string} [props.className] - Дополнительные классы для настройки стилей компонента.
 * @param {string} [props.mode='primary'] - Режим отображения поля ввода. Возможные значения: 'primary'.
 * @param {string} [props.size='auto'] - Размер поля ввода. Возможные значения: 'auto'.
 * @param {string} [props.type='text'] - Тип поля ввода. Возможные значения: 'text', 'number', 'password', 'email'.
 * @param {string} [props.value] - Текущее значение поля ввода.
 * @param {string} [props.placeholder] - Текст плейсхолдера для поля ввода.
 * @param {boolean} [props.disabled=false] - Флаг, указывающий, является ли поле ввода неактивным.
 * @param {function} [props.onClick] - Обработчик события клика на поле ввода.
 * @param {function} [props.onChange] - Обработчик события изменения значения поля ввода.
 * @returns {JSX.Element} - Возвращает JSX-элемент поля ввода.
 */

const AppInput = ({
  className,
  mode,
  disabled,
  size,
  type,
  value,
  placeholder,
  onClick,
  onChange,
  name,
  required,
  minLength,
  maxLength,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      className={clsx(
        'app-input',
        mode && `app-input_${mode}`,
        size && `app-input_${size}`,
        className
      )}
    />
  );
};

AppInput.propTypes = {
  mode: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['auto']),
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'tel']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

AppInput.defaultProps = {
  mode: 'primary',
  size: 'auto',
  type: 'text',
  className: '',
  disabled: false,
  onClick: undefined,
  onChange: undefined,
};

export { AppInput };
