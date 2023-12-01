import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PopupMenu from '../../../../components/Popups/PopupMenu/PopupMenu';
import IconBasket from '../../../../components/UI/Icon/Icon_basket';
import IconBasketBlack from '../../../../components/UI/Icon/icon_basket-black';
import IconBoxRu from '../../../../components/UI/Icon/Icon_boxRu';
import IconBurger from '../../../../components/UI/Icon/Icon_burger';
import IconFire from '../../../../components/UI/Icon/Icon_fire';
import IconMessage from '../../../../components/UI/Icon/Icon_message';
import IconPosition from '../../../../components/UI/Icon/Icon_position';
import IconProfile from '../../../../components/UI/Icon/Icon_profile';
import IconProfileBlack from '../../../../components/UI/Icon/Icon_profile-black';
import IconScales from '../../../../components/UI/Icon/Icon_scales';
import Search from '../../../../components/UI/Search/Search';
import { basketModel } from '../../../../entities/basket';
import { geoApi } from '../../../api';
import usePopup from '../../../hooks/usePopup';
import { AppLink, AppNavLink } from '../../AppLink';

import './Header.scss';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Проверяем, есть ли товары в корзине
  const dispatch = useDispatch();
  const basketList = basketModel.useGetBasketItems();
  const isItemsInBasket = basketList.basket_products.length > 0;
  const basketItemCount = basketList.basket_products.length;

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
          <IconBurger />
          Каталог
        </button>

        <nav className="header__navigation">
          <AppLink type="dark" className="header__link" to="#1">
            Поставщики
          </AppLink>

          <AppLink type="dark" className="header__link" to="#2">
            Закупки
          </AppLink>

          <AppLink type="dark" className="header__link" to="#">
            Оплата&nbsp;и&nbsp;доставка
          </AppLink>

          <AppLink type="dark" className="header__link" to="#">
            Возврат
          </AppLink>

          <AppLink type="dark" className="header__link" to="#">
            <IconFire />
            Акции
          </AppLink>
        </nav>

        <Search />
      </div>

      <nav className="header__navigation-link">
        <AppLink type="dark" to="/chat" className="header__link">
          <IconMessage />
        </AppLink>

        <AppLink type="dark" to="/scale" className="header__link">
          <IconScales />
        </AppLink>

        <AppLink type="dark" to="/basket" className="header__link header__icon-container">
          {isItemsInBasket ? (
            <>
              {basketItemCount > 0 && <span className="header__item-count">{basketItemCount}</span>}
              <IconBasketBlack />
            </>
          ) : (
            <IconBasket />
          )}
        </AppLink>

        <AppLink
          type="dark"
          onClick={!isLoggedIn && handleOpenAuthPopup}
          to="/account/profile"
          className="header__link"
        >
          {isLoggedIn ? <IconProfileBlack /> : <IconProfile />}
        </AppLink>
      </nav>

      {isPopupOpen && <PopupMenu onClose={togglePopup} />}
    </header>
  );
};

export { Header };
