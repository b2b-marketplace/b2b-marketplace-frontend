import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import IconPosition from '../Icon/Icon_position';
import IconChat from '../Icon/Icon_chat';
import IconScales from '../Icon/Icon_scales';
import IconBasket from '../Icon/Icon_basket';
import IconProfile from '../Icon/Icon_profile';
import logo from '../../image/logo-test.svg';

const Header = () => {
  return (
    <header className="header">
      <button type="button" className="header__location">
        <IconPosition className={'header__location-icon'}></IconPosition>
        <span className="header__location-text">Санкт&#8209;Петербург</span>
      </button>

      <div className="header__container-logo">
        <img className="header__logo" src={logo}></img>
      </div>

      <ul className="header__navigation">
        <li className="header__navigation-item">
          <Link className="header__navigation-link">
            <IconChat></IconChat>
          </Link>
        </li>
        <li className="header__navigation-item">
          <Link className="header__navigation-link">
            <IconScales></IconScales>
          </Link>
        </li>
        <li className="header__navigation-item">
          <Link className="header__navigation-link">
            <IconBasket></IconBasket>
          </Link>
        </li>
        <li className="header__navigation-item">
          <Link className="header__navigation-link">
            <IconProfile></IconProfile>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
