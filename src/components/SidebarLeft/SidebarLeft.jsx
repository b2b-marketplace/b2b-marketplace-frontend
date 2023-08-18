import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarLeft.scss';
import PropTypes from 'prop-types';

const SidebarLeft = ({ menuItems, phone, icon1, icon2, text1, text2 }) => {
  return (
    <section className="sidebar-left">
      <div className="sidebar-left__container">
        <ul className="sidebar-left__items">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-left__item">
              {item.icon}
              <Link className="sidebar-left__link" to={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-left__container">
        <button className="sidebar-left__button">
          {icon1} {text1}
        </button>

        <button className="sidebar-left__button">
          {icon2} {text2}
        </button>

        <a className="sidebar-left__contact" href={`tel:${phone}`}>
          {phone}
        </a>
        <p className="sidebar-left__text">Звонок бесплатный</p>
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
