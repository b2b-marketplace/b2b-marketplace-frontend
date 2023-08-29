import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Catalog.scss';
import IconBurger from '../UI/Icon/Icon_burger';
import IconFire from '../UI/Icon/Icon_fire';
import IconScales from '../UI/Icon/Icon_scales';
import IconBasket from '../UI/Icon/Icon_basket';
import IconProfile from '../UI/Icon/Icon_profile';

import { Button } from '../UI/Button/Button';
import IconMessage from '../UI/Icon/Icon_message';

const Catalog = () => {
  return (
    <div className="catalog">
      <Button size="l" mode="secondary">
        <IconBurger />
        Каталог
      </Button>

      <nav className="catalog__navigation">
        <NavLink className="catalog__link" to="/">
          Поставщики
        </NavLink>

        <NavLink className="catalog__link" to="#">
          Закупки
        </NavLink>

        <NavLink className="catalog__link" to="#">
          Оплата&nbsp;и&nbsp;доставка
        </NavLink>

        <NavLink className="catalog__link" to="#">
          Возврат
        </NavLink>

        <NavLink className="catalog__link" to="#">
          <IconFire />
          Акции
        </NavLink>
      </nav>

      <nav className="catalog__navigation-link">
        <Link to="/chat" className="catalog__link">
          <IconMessage />
        </Link>

        <Link to="/scale" className="catalog__link">
          <IconScales />
        </Link>

        <Link to="/basket" className="catalog__link">
          <IconBasket />
        </Link>

        <Link to="/account" className="catalog__link">
          <IconProfile />
        </Link>
      </nav>
    </div>
  );
};

export default Catalog;
