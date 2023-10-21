import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Container.scss';

/**
 * Компонент контейнера с опциональной границей.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @param {ReactNode} children - Вложенные элементы.
 * @param {boolean} border - Наличие границы.
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Container = ({ className, children, border }) => {
  const currentClassName = clsx('container', border && 'container_border', className);

  return <div className={currentClassName}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  border: PropTypes.bool,
};

Container.defaultProps = {
  className: '',
  border: false,
};

export { Container };
