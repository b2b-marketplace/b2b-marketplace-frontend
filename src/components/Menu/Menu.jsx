import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.scss';
import IconBurger from '../UI/Icon/Icon_burger';
import IconFire from '../UI/Icon/Icon_fire';
import IconScales from '../UI/Icon/Icon_scales';
import IconBasket from '../UI/Icon/Icon_basket';
import IconProfile from '../UI/Icon/Icon_profile';

import { Button } from '../UI/Button/Button';
import IconMessage from '../UI/Icon/Icon_message';
import PopupMenu from '../PopupMenu/PopupMenu';

const Menu = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="menu">
      <Button size="l" mode="secondary" border={false} onClick={togglePopup}>
        <IconBurger className={'menu__icon'} />
        Каталог
      </Button>

      <nav className="menu__navigation">
        <NavLink className="menu__link" to="/">
          Поставщики
        </NavLink>

        <NavLink className="menu__link" to="#">
          Закупки
        </NavLink>

        <NavLink className="menu__link" to="#">
          Оплата&nbsp;и&nbsp;доставка
        </NavLink>

        <NavLink className="menu__link" to="#">
          Возврат
        </NavLink>

        <NavLink className="menu__link" to="#">
          <IconFire className={'menu__icon'} />
          Акции
        </NavLink>
      </nav>

      <nav className="menu__navigation-link">
        <Link to="/chat" className="menu__link">
          <IconMessage />
        </Link>

        <Link to="/scale" className="menu__link">
          <IconScales />
        </Link>

        <Link to="/basket" className="menu__link">
          <IconBasket />
        </Link>

        <Link to="/account" className="menu__link">
          <IconProfile />
        </Link>
      </nav>

      {isPopupOpen && <PopupMenu onClose={togglePopup} />}
    </div>
  );
};

export default Menu;
