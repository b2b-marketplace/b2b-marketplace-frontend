import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import geoApi from '../../shared/api/GeoApi';
import usePopup from '../../shared/hooks/hooks/usePopup';
import PopupMenu from '../Popups/PopupMenu/PopupMenu';
import IconBasket from '../UI/Icon/Icon_basket';
import IconBoxRu from '../UI/Icon/Icon_boxRu';
import IconBurger from '../UI/Icon/Icon_burger';
import IconClose from '../UI/Icon/Icon_close24';
import IconFire from '../UI/Icon/Icon_fire';
import IconMessage from '../UI/Icon/Icon_message';
import IconPosition from '../UI/Icon/Icon_position';
import IconProfile from '../UI/Icon/Icon_profile';
import IconScales from '../UI/Icon/Icon_scales';
import IconSearch from '../UI/Icon/Icon_search';

import './Header.scss';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { openPopup: openAuthPopup } = usePopup('select');
  const [city, setCity] = useState('Дефолтсити');

  const handleOpenAuthPopup = (event) => {
    event.preventDefault();
    openAuthPopup();
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    setShowSearchIcon(event.target.value === ''); // Проверка на пустой ввод
  };

  const handleSearch = () => {
    // логика поиска здесь, используя значение searchText
    console.log('Выполняем поиск с текстом:', searchText);
  };

  const clearSearchText = () => {
    setSearchText('');
    setShowSearchIcon(true);
  };

  useEffect(() => {
    geoApi
      .getCity()
      .then((res) => setCity(res.city))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <header className="header">
      <div className="header__container-logo">
        <Link to="/" className="header__logo">
          <IconBoxRu />
        </Link>
        <Link to="/" className="header__title">
          B2Buy
        </Link>
        <button type="button" className="header__location">
          <IconPosition />
          <span className="header__location-text">{city}</span>
        </button>
      </div>

      <div className="header__container">
        <button type="button" className="header__catalog-button" onClick={togglePopup}>
          {isPopupOpen ? <IconClose /> : <IconBurger />}
          Каталог
        </button>

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
          <input
            type="text"
            className="header__input"
            placeholder="Поиск...."
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <button
            type="button"
            className="header__button"
            onClick={showSearchIcon ? handleSearch : clearSearchText}
          >
            {showSearchIcon ? <IconSearch /> : <IconClose />}
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

        <Link
          onClick={!isLoggedIn && handleOpenAuthPopup}
          to="/account/profile"
          className="header__link"
        >
          <IconProfile />
        </Link>
      </nav>

      {isPopupOpen && <PopupMenu onClose={togglePopup} />}
    </header>
  );
};

export default Header;
