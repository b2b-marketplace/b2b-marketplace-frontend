import React, { useRef } from 'react';
import "./Checkbox.scss";

/**
 * Компонент Checkbox для отображения интерактивного флажка.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {string} name - Имя чекбокса.
 * @param {string} id - Уникальный идентификатор чекбокса.
 * @param {function} onClick - Функция обратного вызова при клике на элемент чекбокса.
 * @param {boolean} isChecked - Состояние выбора чекбокса.
 * @param children -  Дочерние элементы.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Checkbox.
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Checkbox = ({ className, name, id, onClick, isChecked, children }) => {

  const containerRef = useRef(null);

  const handleClick = (event) => {
    if (event.target.tagName.toLowerCase() !== 'input')
      onClick(event);
    event.stopPropagation();
  };

  return (
    <label data-checked={isChecked} data-id={id} onClick={handleClick} ref={containerRef} className={`checkbox ${className ? className : ''}`}>
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        value={isChecked ? 'true' : 'false'}
        checked={isChecked}
        onChange={() => {
        }}
      />
      <span className={`checkbox__checkbox ${isChecked ? "checkbox__checkbox_active" : ""}`}></span>
      {children}
    </label>
  );
};

export default Checkbox;
