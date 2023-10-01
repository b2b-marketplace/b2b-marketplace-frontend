import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MenuAccountWidgets.scss';
import MenuVertical from '../components/Menu/MenuVertical/MenuVertical';
import BiBag from '../components/UI/Icon/Icon_bibag';
import IconPackage from '../components/UI/Icon/Icon_package';
import IconHearth from '../components/UI/Icon/Icon_hearth';
import IconBasket from '../components/UI/Icon/Icon_basket';
import IconMessage from '../components/UI/Icon/Icon_message';
import IconLock from '../components/UI/Icon/Icon_lock';
import IconExit from '../components/UI/Icon/Icon_exit';
import IconBag from '../components/UI/Icon/Icon_bag';
import IconPurchases from '../components/UI/Icon/Icon_purchases';
import IconCreditCard from '../components/UI/Icon/Icon_credit-card';
import IconLocation from '../components/UI/Icon/Icon_location';

const MenuAccountWidgets = () => {
  const { user } = useSelector((state) => state.account);
  const [menuItems, setMenuItems] = useState([]);
  const menuItemsCustomer = [
    { icon: <BiBag />, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage />, link: 'orders', label: 'Закупки' },
    { icon: <IconPurchases />, link: 'favorites', label: 'Мои заказы' },
    { icon: <IconHearth />, link: 'favorites', label: 'Избранное' },
    { icon: <IconBasket />, link: '/basket', label: 'Корзина' },
    { icon: <IconMessage />, link: 'message', label: 'Сообщения' },
    { icon: <IconCreditCard />, link: 'message', label: 'Оплата' },
    { icon: <IconLocation />, link: 'message', label: 'Адрес' },
    { icon: <IconLock />, link: 'secure', label: 'Безопасность' },
  ];

  const menuItemsSupplier = [
    { icon: <BiBag />, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage />, link: 'products', label: 'Товары' },
    { icon: <IconBag />, link: 'orders', label: 'Заказы' },
    { icon: <IconHearth />, link: 'favorites', label: 'Избранное' },
    { icon: <IconMessage />, link: 'message', label: 'Сообщения' },
    { icon: <IconCreditCard />, link: 'message', label: 'Оплата' },
    { icon: <IconLocation />, link: 'message', label: 'Адрес' },
    { icon: <IconLock />, link: 'secure', label: 'Безопасность' },
  ];

  useEffect(() => {
    return () => {
      const currentMenu = user?.company.role === 'supplier' ? menuItemsSupplier : menuItemsCustomer;
      setMenuItems(currentMenu);
    };
  }, []);

  return (
    <div className="menu-account-widgets">
      <MenuVertical menuItems={menuItems} />
      <div className="menu-account-widgets__footer">
        <Link className="menu-account-widgets__link" to="/logout">
          <IconExit />
        </Link>
        <Link target="_blank" className="menu-account-widgets__link" to="tel:88008000000">
          8-800-800-00-00
        </Link>
        <p className="menu-account-widgets__phone-desc">Звонок бесплатный</p>
      </div>
    </div>
  );
};

export default MenuAccountWidgets;
