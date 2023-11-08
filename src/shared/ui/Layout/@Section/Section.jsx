import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Section.scss';

/**
 * Компонент контейнера с опциональной границей и направлением.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @param {ReactNode} children - Вложенные элементы.
 * @param {boolean} border - Наличие границы (опционально).
 * @param {string} direction - Направление контейнера ('row' или 'column').
 * @returns {JSX.Element}
 */
const Section = ({ className, children, border, direction }) => {
  const currentClassName = clsx(
    'section',
    className,
    border && 'section_border',
    direction && `section_${direction}`
  );

  return <div className={currentClassName}>{children}</div>;
};

Section.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  children: PropTypes.node,
  border: PropTypes.bool,
};

Section.defaultProps = {
  className: '',
  direction: 'column',
  border: false,
};

export { Section };
