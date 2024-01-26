import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import './Checkbox.scss';

/**
 * Компонент Checkbox для отображения интерактивного флажка.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {string} props.className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {string} props.name - Имя чекбокса.
 * @param {function} props.onClick - Функция обратного вызова при клике на элемент чекбокса.
 * @param {boolean} props.checked - Состояние выбора чекбокса.
 * @param {boolean} props.disabled - Определяет, должен ли чекбокс быть заблокирован.
 * @param {ReactNode} props.children - Дочерние элементы.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Checkbox.
 */
const Checkbox = ({ className, name, onClick, children, checked = false, disabled = false }) => {
  /**
   * Обработчик клика на компоненте чекбокса.
   * @param {Event} event - Событие клика.
   */
  const handleClick = (event) => {
    if (disabled) return;
    if (onClick && event.target.tagName.toLowerCase() !== 'input') {
      onClick(event);
    }
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

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export { Checkbox };
