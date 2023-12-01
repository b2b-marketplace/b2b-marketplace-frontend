import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './AppLink.scss';

/**
 * Компонент ссылки (Link или NavLink) с настраиваемыми классами и типом.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @param activeClassName - CSS класс активной ссылки.
 * @param {ReactNode} children - Вложенные элементы.
 * @param {string} target - Атрибут target для ссылки.
 * @param {string} to - URL, на который будет осуществлена ссылка.
 * @param {string} type - Тип ссылки (например, 'gray', 'active').
 * @returns {JSX.Element}
 * @constructor
 */
const AppNavLink = ({ className, activeClassName, children, target, to, type }) => {
  const currentClassName = (isActive) =>
    clsx(
      'app-link',
      type && `app-link_${type}`,
      isActive && (activeClassName || 'app-link_active'),
      className
    );

  return (
    <NavLink target={target} className={({ isActive }) => currentClassName(isActive)} to={to}>
      {children}
    </NavLink>
  );
};

AppNavLink.propTypes = {
  navLink: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['gray', 'dark']),
};

AppNavLink.defaultProps = {
  navLink: false,
  className: '',
  target: '',
  type: 'dark',
  to: '#',
};

export { AppNavLink };
