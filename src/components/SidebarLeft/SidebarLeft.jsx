import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SidebarLeft.scss';
import PropTypes from 'prop-types';

const SidebarLeft = ({ menuItems, phone, icon1, icon2, text1, text2 }) => {

  return (
    <section className="sidebar-left">
      <div className="sidebar-left__conteiner">
        <ul className="sidebar-left__items">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-left__item">

              <NavLink className={({ isActive }) => `sidebar-left__link ${isActive ? 'sidebar-left__link_active' : ''}`} to={item.link}>
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-left__conteiner sidebar-left__conteiner_bottom">
        <div className="sidebar-left__profile-control">
          <button className="sidebar-left__button">
            {icon1} {text1}
          </button>

          <button className="sidebar-left__button">
            {icon2} {text2}
          </button>
        </div>

        <a className="sidebar-left__contact" href={`tel:${phone}`}>
          {phone}
          <p className="sidebar-left__text">Звонок бесплатный</p>
        </a>

      </div>
    </section>
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
