import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import IconClose from '../../../../components/UI/Icon/Icon_close';
import { AppInput } from '../../../../shared/ui/AppInput';

import './AccountInputField.scss';

/**
 * Компонент для отображения поля ввода в рамках профиля аккаунта.
 * Поддерживает режимы отображения с иконкой и без нее, а также возможность редактирования.
 * В случае редактирования предоставляет кнопку для сброса значения инпута.
 *
 * @component
 * @param {Object} props - Параметры компонента.
 * @param {string} props.label - Текст метки для поля ввода.
 * @param {string} props.placeholder - Текст плейсхолдера для поля ввода.
 * @param {string} props.type - Тип поля ввода (text, number, password, email).
 * @param {JSX.Element} props.icon - Иконка, отображаемая рядом с полем ввода.
 * @param {string} props.name - Имя поля ввода.
 * @param {string} props.id - Уникальный идентификатор поля ввода.
 * @param {boolean} props.isDisabled - Флаг, указывающий, является ли поле ввода неактивным.
 * @param {boolean} props.isError - Флаг, указывающий, есть ли ошибка в поле ввода.
 * @param {string} props.errors - Строка с текстом ошибки, отображаемой при невалидном вводе.
 * @param {function} props.onChange - Обработчик события изменения значения поля ввода.
 * @param {string} props.value - Текущее значение поля ввода.
 * @param {number} props.minLength - Минимальная длина значения поля ввода.
 * @param {number} props.maxLength - Максимальная длина значения поля ввода.
 * @param {boolean} props.required - Флаг, указывающий, является ли поле ввода обязательным для заполнения.
 * @param {function} props.resetInput - Функция для сброса значения поля ввода.
 * @returns {JSX.Element} - Возвращает JSX-элемент поля ввода.
 */

const AccountInputField = ({
  label,
  placeholder,
  type,
  icon,
  name,
  id,
  isDisabled,
  isError,
  onChange,
  value,
  minLength,
  maxLength,
  required,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [initialValue, setInitialValue] = useState(value); // Состояние для хранения изначального значения

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(event);
    }
  };

  const handleResetClick = () => {
    onChange({ target: { value: '', name } });
  };

  const handleEditStart = () => {
    setInitialValue(inputValue); // Запоминаем текущее значение при начале редактирования
  };

  const handleEditCancel = () => {
    setInputValue(initialValue); // Возвращаем изначальное значение при отмене редактирования
  };

  return (
    <div className="account-input-field">
      <div className="account-input-field__container">
        {icon}
        <label className="account-input-field__label">
          {label}
          {isDisabled ? (
            <AppInput
              className="account-input-field__input"
              type={type}
              placeholder={placeholder}
              name={name}
              id={id}
              onChange={handleInputChange}
              value={value}
            />
          ) : (
            <div className="account-input-field__inputwithicon">
              <AppInput
                className="account-input-field__input account-input-field__input-active"
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={handleInputChange}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                onFocus={handleEditStart}
                onBlur={handleEditCancel}
              />
              <button
                type="button"
                className="account-input-field__input-button"
                onClick={handleResetClick}
              >
                <IconClose className="account-input-field__input-button-icon" />
              </button>
            </div>
          )}
        </label>
      </div>
      {!value && required ? (
        <span className={clsx('account-input-field__error')}>обязательное поле</span>
      ) : (
        <span className={clsx('account-input-field__error')}>{isError}</span>
      )}
    </div>
  );
};

AccountInputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  name: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  errors: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  resetInput: PropTypes.func,
};

export { AccountInputField };
