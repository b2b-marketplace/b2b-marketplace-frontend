import React from 'react';
import "./Tooltip.scss";

/**
 * Компонент Tooltip, отображающий дополнительную информацию при наведении или клике.
 *
 * @param {React.ReactNode} tooltipContent - Содержимое, которое будет отображаться внутри подсказки.
 * @param {React.ReactNode} children - Содержимое, вызывающее появление подсказки (например, иконка или текст).
 * @param sizeText {"s" | "m" | "l" | "xl"}
 * @param {"top" | "left" | "right" | "bottom"} position - Позиция, на которой должна появиться подсказка относительно children.
 *
 * @returns {JSX.Element} - Отрендеренный компонент Tooltip.
 */
const Tooltip = ({ tooltipContent, children, sizeText, position = "top" }) => {
  const stylePosition = position ? "tooltip__content_" + position : "";
  const styleSizeText = sizeText ? `tooltip__size tooltip__size_${sizeText}` : "";
  return (
    <div className="tooltip">
      {children}
      <span className={`tooltip__content ${stylePosition} ${styleSizeText} `}>{tooltipContent}</span>
    </div>
  );
};

export default Tooltip;
