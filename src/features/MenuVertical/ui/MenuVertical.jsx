import React from 'react';
import PropTypes from 'prop-types';

import { AppLink, AppNavLink } from '../../../shared/ui/AppLink';

import './MenuVertical.scss';

/**
 * Вертикальное меню.
 *
 * @param {Array} menuItems - Массив элементов меню.
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const MenuVertical = ({ menuItems }) => {
  return (
    <nav className="menu-vertical">
      <ul className="menu-vertical__list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-vertical__item">
            <AppNavLink type="gray" to={item.link} className="menu-vertical__link">
              {item.icon}
              {item.label}
            </AppNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MenuVertical.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export { MenuVertical };
