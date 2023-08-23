import React from 'react';
import "./Checkbox.scss";

/**
 * Компонент Checkbox для отображения интерактивного флажка.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {string} name - Имя чекбокса.
 * @param {string} id - Уникальный идентификатор чекбокса.
 * @param {function} onClick - Функция обратного вызова при клике на элемент чекбокса.
 * @param {boolean} isChecked - Состояние выбора чекбокса.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Checkbox.
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Checkbox = ({ className, name, id, onClick, isChecked }) => {

  const handleClick = (event) => {
    onClick(event);
  };


  return (
    <label className={`checkbox ${className ? className : ''}`}>
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        value={isChecked ? 'true' : 'false'}
        checked={isChecked}
        onChange={() => {
        }}
      />
      <div data-checked={isChecked} data-id={id} onClick={handleClick} className={`checkbox__checkbox ${isChecked ? "checkbox__checkbox_active" : ""}`}></div>
    </label>
  );
};

export default Checkbox;
