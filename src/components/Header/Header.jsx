import React from 'react';
import './Header.scss';
import IconPosition from '../../components/UI/Icon/Icon_position';
import IconBoxRu from '../../components/UI/Icon/Icon_boxRu';
import Catalog from "../Catalog/Catalog";

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__container-logo">
          <IconBoxRu />
        </div>
        <div className="header__search">
          <input className="header__search-input" placeholder="Введите запрос" />
          <button type="button" className="header__search-button">
            Найти
          </button>
        </div>
        <button type="button" className="header__location">
          <IconPosition className={'header__location-icon'}></IconPosition>
          <span className="header__location-text">Санкт&#8209;Петербург</span>
        </button>
      </div>
      <Catalog />
    </header>
  );
};

export default Header;
