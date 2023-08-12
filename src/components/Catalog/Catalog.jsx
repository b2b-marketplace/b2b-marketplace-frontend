import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.scss';
import IconBurger from '../Icon/Icon_burger';
import IconAction from '../Icon/Icon_action';
import IconChat from '../Icon/Icon_chat';
import IconScales from '../Icon/Icon_scales';
import IconBasket from '../Icon/Icon_basket';
import IconProfile from '../Icon/Icon_profile';

const Catalog = () => {
  return (
    <div className="catalog">
      <button className="catalog__button">
        <IconBurger /> <span className="catalog__button-text">Каталог</span>
      </button>
      <ul className="catalog__list">
        <li className="catalog__list-item">Поставщики</li>
        <li className="catalog__list-item">Закупки</li>
        <li className="catalog__list-item">Оплата&nbsp;и&nbsp;доставка</li>
        <li className="catalog__list-item">Возврат</li>
        <li className="catalog__list-item">
          <IconAction className={'catalog__list-img'} />
          Акции
        </li>
      </ul>

      <ul className="catalog__navigation">
        <li className="catalog__navigation-item">
          <Link className="catalog__navigation-link">
            <IconChat></IconChat>
          </Link>
        </li>
        <li className="catalog__navigation-item">
          <Link className="catalog__navigation-link">
            <IconScales></IconScales>
          </Link>
        </li>
        <li className="catalog__navigation-item">
          <Link className="catalog__navigation-link">
            <IconBasket></IconBasket>
          </Link>
        </li>
        <li className="catalog__navigation-item">
          <Link className="catalog__navigation-link">
            <IconProfile></IconProfile>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Catalog;
