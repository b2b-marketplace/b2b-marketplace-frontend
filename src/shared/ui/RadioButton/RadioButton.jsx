import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import './RadioButton.scss';

/**
 * Компонент радиокнопки (Radio Button) с настраиваемыми классами и цветовой темой.
 *
 * @param {string} name - Имя радиокнопки.
 * @param {string} id - Уникальный идентификатор радиокнопки.
 * @param {string|number} value - Значение радиокнопки (может быть строкой или числом).
 * @param {function} handleChange - Обработчик изменения состояния радиокнопки.
 * @param {boolean} checked - Состояние радиокнопки (выбрана или нет).
 * @param {ReactNode} children - Вложенные элементы, отображаемые рядом с радиокнопкой.
 * @param {string} extraClassName - Дополнительные классы CSS для настройки внешнего вида.
 * @param {string} color - Цветовая тема радиокнопки ('black' или 'blue').
 * @returns {JSX.Element} JSX элемент компонента радиокнопки.
 */

const RadioButton = ({
  name,
  id,
  value,
  handleChange,
  checked,
  children,
  extraClassName,
  color,
}) => {
  const handleClick = (event) => {
    if (event.target.tagName.toLowerCase() !== 'input') handleChange(event);
    event.stopPropagation();
  };

  const radioButtonClasses = clsx('radio-button', extraClassName, color);

  return (
    <label onClick={handleClick} htmlFor={id} className={radioButtonClasses}>
      <input
        className="radio-button__input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={() => {}}
      />
      <span
        className={`radio-button__custom ${checked ? 'radio-button__custom_active' : ''}`}
      ></span>
      {children}
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node,
  extraClassName: PropTypes.string,
  color: PropTypes.oneOf(['black', 'blue']),
};

export { RadioButton };
