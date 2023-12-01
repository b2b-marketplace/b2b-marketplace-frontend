import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './MenuHorizontal.scss';

/**
 * Компонент горизонтального меню.
 *
 * @param {Array} menuItems - Массив элементов меню.
 * @param {string} className - Дополнительные классы CSS для контейнера меню.
 * @param {function} onLinkClassName - Функция для определения классов для элементов меню.
 * @returns {JSX.Element}
 * @constructor
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const MenuHorizontal = ({ menuItems, className, onLinkClassName }) => {
  const currentClassName = (isActive, item) => {
    if (typeof onLinkClassName === 'function') {
      return onLinkClassName(isActive, item);
    }
    return clsx('menu-horizontal__link', {
      'menu-horizontal__link_active': isActive,
    });
  };

  return (
    <nav className="menu-horizontal">
      <ul className={clsx('menu-horizontal__list', className)}>
        {menuItems.map((item) => (
          <li key={item.key} className="menu-horizontal__item">
            <NavLink className={({ isActive }) => currentClassName(isActive, item)} to={item.link}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MenuHorizontal.propTypes = {
  menuItems: PropTypes.array.isRequired,
  className: PropTypes.string,
  onLinkClassName: PropTypes.func,
};

export { MenuHorizontal };
