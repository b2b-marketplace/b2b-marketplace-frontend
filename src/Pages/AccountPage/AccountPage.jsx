import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './AccountPage.scss';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import MenuVerticalWidget from '../../widgets/MenuVerticalWidget';
import BiBag from '../../components/UI/Icon/Icon_bibag';
import IconPackage from '../../components/UI/Icon/Icon_package';
import IconPurchases from '../../components/UI/Icon/Icon_purchases';
import IconHearth from '../../components/UI/Icon/Icon_hearth';
import IconBasket from '../../components/UI/Icon/Icon_basket';
import IconMessage from '../../components/UI/Icon/Icon_message';
import IconCreditCard from '../../components/UI/Icon/Icon_credit-card';
import IconLocation from '../../components/UI/Icon/Icon_location';
import IconLock from '../../components/UI/Icon/Icon_lock';
import IconBag from '../../components/UI/Icon/Icon_bag';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const AccountPage = () => {
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
    <main className="account-page">
      <div className="account-page__sidebar-left">
        <SidebarLeft>
          <MenuVerticalWidget menuItems={menuItems} />
        </SidebarLeft>
      </div>
      <Outlet />
    </main>
  );
};

export default AccountPage;
