import React from 'react';
import { Outlet } from 'react-router-dom';
import './AccountPage.scss';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';

import BiBag from '../../components/UI/Icon/Icon_bibag';
import IconPackage from '../../components/UI/Icon/Icon_package';
import IconHearth from '../../components/UI/Icon/Icon_hearth';
import IconBag from '../../components/UI/Icon/Icon_bag';
import IconMessage from '../../components/UI/Icon/Icon_message';
import IconLock from '../../components/UI/Icon/Icon_lock';
import IconBasket from '../../components/UI/Icon/Icon_basket';

const AccountPage = ({ role = 'seller' }) => {
  const menuItemsBuyer = [
    { icon: <BiBag />, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage />, link: 'orders', label: 'Закупки' },
    {
      icon: <IconHearth />,
      link: 'favorites',
      label: 'Избранное',
    },
    { icon: <IconBasket />, link: '/basket', label: 'Корзина' },
    { icon: <IconMessage />, link: 'message', label: 'Сообщения' },
    { icon: <IconLock className={'account-page__icon'} />, link: 'secure', label: 'Безопасность' },
  ];

  const menuItemsSeller = [
    { icon: <BiBag />, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Товары' },
    { icon: <IconBag />, link: '#', label: 'Заказы' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  return (
    <main className="account-page">
      <SidebarLeft menuItems={menuItemsBuyer} phone="8-800-800-00-00" />
      <Outlet />
    </main>
  );
};

export default AccountPage;
