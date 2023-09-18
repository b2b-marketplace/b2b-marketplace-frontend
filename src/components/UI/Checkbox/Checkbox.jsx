import React, { useRef } from 'react';
import './Checkbox.scss';

/**
 * Компонент Checkbox для отображения интерактивного флажка.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {string} name - Имя чекбокса.
 * @param {function} handleChangeCheckbox - Функция обратного вызова при клике на элемент чекбокса.
 * @param {boolean} checked - Состояние выбора чекбокса.
 * @param children -  Дочерние элементы.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Checkbox.
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Checkbox = ({ className, name, handleChangeCheckbox, checked, children }) => {
  const handleClick = (event) => {
    if (handleChangeCheckbox && event.target.tagName.toLowerCase() !== 'input')
      handleChangeCheckbox(event);
  };

  return (
    <label onClick={handleClick} className={`checkbox ${className || ''}`}>
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        value={checked ? 'true' : 'false'}
        checked={checked}
        onChange={() => {}}
      />
      <span className={`checkbox__checkbox ${checked ? 'checkbox__checkbox_active' : ''}`}></span>
      {children}
    </label>
  );
};

export default Checkbox;
