import PropTypes from 'prop-types';
import React from 'react';

import './Button.scss';

/**
 * Базовая кнопка
 *
 * @param primary - тип кнопки, true - темная или светлая, false - цветная (голубая)
 * @param dark - тип заливки при primary true, темная или светлая
 * @param size - размер кнопки
 * @param type - тип кнопки
 * @param children - для передачи иконок и текста на кнопке
 * @param disabled - свойство неактивности
 * @param pressed - свойство нажата, например для отображения того, что товар уже в корзине
 * @param extraClass - дополнительные классы

 * @returns {JSX.Element}
 */
const Button = ({
  primary,
  dark,
  size,
  type,
  children,
  disabled,
  pressed,
  extraClass,
  ...props
}) => {
  const mode = primary ? 'button_primary' : 'button_secondary';
  const isDark = dark ? `${mode}_dark` : '';
  const isPressed = pressed ? `${mode}_pressed` : '';
  return (
    <button
      disabled={disabled}
      type={type}
      className={['button', `button_size_${size}`, mode, isDark, isPressed, extraClass || ''].join(
        ' '
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  extraClass: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  dark: false,
  size: 'm',
  disabled: false,
  pressed: false,
  extraClass: '',
  onClick: undefined,
};

export { Button };
