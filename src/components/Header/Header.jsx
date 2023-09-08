import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import IconPosition from '../../components/UI/Icon/Icon_position';
import IconBoxRu from '../../components/UI/Icon/Icon_boxRu';
import IconBurger from '../UI/Icon/Icon_burger';
import IconFire from '../UI/Icon/Icon_fire';
import IconScales from '../UI/Icon/Icon_scales';
import IconBasket from '../UI/Icon/Icon_basket';
import IconProfile from '../UI/Icon/Icon_profile';

import { Button } from '../UI/Button/Button';
import IconMessage from '../UI/Icon/Icon_message';
import PopupMenu from '../Popups/PopupMenu/PopupMenu';
import IconSearch from '../UI/Icon/Icon_search';
import Input from '../UI/Input/Input';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="header">
      <div className="header__container-logo">
        <Link to="/" className="header__logo">
          <IconBoxRu />
        </Link>
        <Link to="/" className="header__title">
          B2Buy.ru
        </Link>
        <button type="button" className="header__location">
          <IconPosition />
          <span className="header__location-text">Санкт-Петербург</span>
        </button>
      </div>

      <div className="header__container">
        <Button size="s" mode="secondary" border={false} onClick={togglePopup}>
          <IconBurger />
          Каталог
        </Button>

        <nav className="header__navigation">
          <NavLink className="header__link" to="/">
            Поставщики
          </NavLink>

          <NavLink className="header__link" to="#">
            Закупки
          </NavLink>

          <NavLink className="header__link" to="#">
            Оплата&nbsp;и&nbsp;доставка
          </NavLink>

          <NavLink className="header__link" to="#">
            Возврат
          </NavLink>

          <NavLink className="header__link" to="#">
            <IconFire />
            Акции
          </NavLink>
        </nav>

        <div className="header__search">
          <Input mode="primary" type="text" extraClass="header__input" placeholder="Поиск...." />
          <button type="button" className="header__button">
            <IconSearch />
          </button>
        </div>
      </div>

      <nav className="header__navigation-link">
        <Link to="/chat" className="header__link">
          <IconMessage />
        </Link>

        <Link to="/scale" className="header__link">
          <IconScales />
        </Link>

        <Link to="/basket" className="header__link">
          <IconBasket />
        </Link>

        <Link to="/account" className="header__link">
          <IconProfile />
        </Link>
      </nav>

      {isPopupOpen && <PopupMenu onClose={togglePopup} />}
    </header>
  );
};

export default Header;
