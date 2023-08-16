import React from 'react';
import { Link } from 'react-router-dom';
import './АccountBar.scss';
import PropTypes from 'prop-types';

const AccountBar = ({ menuItems, phone, icon1, icon2, text1, text2 }) => {
  return (
    <section className="account-bar">
      <div className="account-bar__container">
        <ul className="account-bar__items">
          {menuItems.map((item, index) => (
            <li key={index} className="account-bar__item">
              {item.icon}
              <Link className="account-bar__link" to={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="account-bar__container">
        <button className="account-bar__button">
          {icon1} {text1}
        </button>

        <button className="account-bar__button">
          {icon2} {text2}
        </button>

        <a className="account-bar__contact" href={`tel:${phone}`}>
          {phone}
        </a>
        <p className="account-bar__text">Звонок бесплатный</p>
      </div>
    </section>
  );
};

AccountBar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  phone: PropTypes.string.isRequired,
};

export default AccountBar;
