import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarLeft.scss';
import PropTypes from 'prop-types';

const SidebarLeft = ({ menuItems, phone }) => {
  return (
    <nav className="sidebar-left">
      <div className="sidebar-left__conteiner">
        <ul className="sidebar-left__items">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-left__item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-left__link ${isActive ? 'sidebar-left__link_active' : ''}`
                }
                to={item.link}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="sidebar-left__contact" href={`tel:${phone}`}>
          {phone}
          <p className="sidebar-left__text">Звонок бесплатный</p>
        </a>
      </div>
    </nav>
  );
};

SidebarLeft.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  phone: PropTypes.string.isRequired,
};

export default SidebarLeft;
