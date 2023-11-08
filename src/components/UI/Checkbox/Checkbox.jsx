import React, { useRef } from 'react';
import clsx from 'clsx';

import './Checkbox.scss';

/**
 * Компонент Checkbox для отображения интерактивного флажка.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {string} name - Имя чекбокса.
 * @param {function} handleChangeCheckbox - Функция обратного вызова при клике на элемент чекбокса.
 * @param {boolean} checked - Состояние выбора чекбокса.
 * @param children - Дочерние элементы.
 * @param disabled
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Checkbox.
 */
const Checkbox = ({
  className,
  name,
  handleChangeCheckbox,
  children,
  checked = false,
  disabled = false,
}) => {
  const handleClick = (event) => {
    if (disabled) return;
    if (handleChangeCheckbox && event.target.tagName.toLowerCase() !== 'input')
      handleChangeCheckbox(event);
  };
  return (
    <label
      onClick={handleClick}
      className={clsx('checkbox', className, disabled && 'checkbox_disabled')}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        disabled={disabled}
        name={name}
        checked={checked}
        onChange={() => {}}
      />
      <span
        // className={`checkbox__checkbox  ${
        //   checked ? 'checkbox__checkbox_active' : '',
        //   disabled ? 'checkbox_disabled' : ''
        // }`}
        className={clsx(
          'checkbox__checkbox',
          checked && 'checkbox__checkbox_active',
          disabled && 'checkbox_disabled'
        )}
      ></span>
      {children}
    </label>
  );
};

export default Checkbox;
