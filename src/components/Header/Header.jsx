import React from 'react';
import './Header.scss';
import IconPosition from '../../components/UI/Icon/Icon_position';
import IconBoxRu from '../../components/UI/Icon/Icon_boxRu';
import Catalog from '../Catalog/Catalog';
import { Link } from 'react-router-dom';
import IconSearch from '../UI/Icon/Icon_search';
import Input from "../UI/Input/Input";

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <Link to="/" className="header__container-logo">
          <IconBoxRu />
          BOX.RU
        </Link>
        <div className="header__search">
          <Input mode="primary" type="text" extraClass="header__input" placeholder="Поиск...."/>
          {/*<input className="header__input" placeholder="Введите текст" />*/}
          <button type="button" className="header__button">
            <IconSearch className={'header__button-icon'}/>
          </button>
        </div>
        <button type="button" className="header__location">
          <IconPosition className={'header__location-icon'}/>
          <span className="header__location-text">Санкт-Петербург</span>
        </button>
      </div>
      <Catalog />
    </header>
  );
};

export default Header;
