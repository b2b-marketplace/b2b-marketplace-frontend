import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AppLink.scss';

/**
 * Компонент ссылки (Link или NavLink) с настраиваемыми классами и типом.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @param {ReactNode} children - Вложенные элементы.
 * @param {string} target - Атрибут target для ссылки.
 * @param {string} to - URL, на который будет осуществлена ссылка.
 * @param {string} type - Тип ссылки (например, 'gray', 'active').
 * @returns {JSX.Element}
 * @constructor
 */
const AppLink = ({ className, children, target, to, type }) => {
  return (
    <Link
      target={target}
      className={clsx('app-link', type && `app-link_${type}`, className)}
      to={to}
    >
      {children}
    </Link>
  );
};

AppLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['gray', 'dark']),
};

AppLink.defaultProps = {
  className: '',
  target: '',
  type: 'gray',
  to: '#',
};

export { AppLink };
