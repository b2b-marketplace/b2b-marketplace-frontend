import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuVertical.scss';

const MenuVertical = ({ menuItems }) => {
  return (
    <nav className="menu-vertical">
      <div className="menu-vertical__container">
        <ul className="menu-vertical__list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-vertical__item">
              <NavLink
                className={({ isActive }) =>
                  `menu-vertical__link ${isActive ? 'menu-vertical__link_active' : ''}`
                }
                to={item.link}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuVertical;
