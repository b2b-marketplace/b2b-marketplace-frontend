import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Catalog.scss';
import IconBurger from '../UI/Icon/Icon_burger';
import IconAction from '../UI/Icon/Icon_action';
import IconChat from '../UI/Icon/Icon_chat';
import IconScales from '../UI/Icon/Icon_scales';
import IconBasket from '../UI/Icon/Icon_basket';
import IconProfile from '../UI/Icon/Icon_profile';
import PopupCatalog from '../Popups/PopupCatalog/PopupCatalog';

const Catalog = () => {
  const [catalogPopup, setCatalogPopup] = useState(true);

  const openCatalogPopup = () => {
    return setCatalogPopup(!catalogPopup);
  };

  return (
    <div className="catalog">
      <button className="catalog__button" onClick={openCatalogPopup}>
        <IconBurger /> <span className="catalog__button-text">Каталог</span>
      </button>
      <ul className="catalog__list">
        <li className="catalog__list-item">
          <NavLink className="catalog__list-link" to="/">
            Поставщики
          </NavLink>
        </li>
        <li className="catalog__list-item">
          <NavLink className="catalog__list-link" to="">
            Закупки
          </NavLink>
        </li>
        <li className="catalog__list-item">
          <NavLink className="catalog__list-link" to="">
            Оплата&nbsp;и&nbsp;доставка
          </NavLink>
        </li>
        <li className="catalog__list-item">
          <NavLink className="catalog__list-link" to="">
            Возврат
          </NavLink>
        </li>

        <li className="catalog__list-item">
          <NavLink className="catalog__list-link" to="">
            <IconAction className={'catalog__list-img'} />
            Акции
          </NavLink>
        </li>
      </ul>

      <ul className="catalog__navigation">
        <li className="catalog__navigation-item">
          <Link to="/chat" className="catalog__navigation-link">
            <IconChat></IconChat>
          </Link>
        </li>
        <li className="catalog__navigation-item">
          <Link to="/scale" className="catalog__navigation-link">
            <IconScales></IconScales>
          </Link>
        </li>
        <li className="catalog__navigation-item">
          <Link to="/basket" className="catalog__navigation-link">
            <IconBasket></IconBasket>
          </Link>
        </li>
        <li className="catalog__navigation-item">
          <Link to="/account" className="catalog__navigation-link">
            <IconProfile></IconProfile>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Catalog;
