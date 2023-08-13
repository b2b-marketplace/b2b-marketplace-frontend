import React from 'react';
import "./Tooltip.scss";

/**
 * Компонент Tooltip, отображающий дополнительную информацию при наведении или клике.
 *
 * @param {React.ReactNode} tooltipContent - Содержимое, которое будет отображаться внутри подсказки.
 * @param {React.ReactNode} children - Содержимое, вызывающее появление подсказки (например, иконка или текст).
 * @param {"top" | "left" | "right" | "bottom"} position - Позиция, на которой должна появиться подсказка относительно children.
 *
 * @returns {JSX.Element} - Отрендеренный компонент Tooltip.
 */
const Tooltip = ({ tooltipContent, children, position = "top" }) => {
  const stylePosition = position ? "tooltip__content_" + position : "";

  return (
    <div className="tooltip">
      {children}
      <span className={`tooltip__content ${stylePosition}`}>{tooltipContent}</span>
    </div>
  );
};

export default Tooltip;
