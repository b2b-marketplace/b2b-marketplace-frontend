import React from 'react';
import { Outlet } from 'react-router-dom';
import "./AccountPage.scss";
import SidebarLeft from '../../SidebarLeft/SidebarLeft';
import IconTrash from '../../UI/Icon/Icon_trash';
import IconExit from '../../UI/Icon/Icon_exit';
import BiBag from '../../UI/Icon/Icon_bibag';
import IconPackage from '../../UI/Icon/Icon_package';
import IconHearth from '../../UI/Icon/Icon_hearth';
import IconBag from '../../UI/Icon/Icon_bag';
import IconMessage from '../../UI/Icon/Icon_message';
import IconLock from '../../UI/Icon/Icon_lock';
import IconBasket from '../../UI/Icon/Icon_basket';

const AccountPage = ({role="seller"}) => {

  const menuItemsBuyer = [
    { icon: <BiBag/>, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage/>, link: 'orders', label: 'Закупки' },
    { icon: <IconHearth className={'account-company-buyer__icon'}/>, link: 'favorites', label: 'Избранное', },
    { icon: <IconBasket/>, link: '/basket', label: 'Корзина' },
    { icon: <IconMessage/>, link: 'message', label: 'Сообщения' },
    { icon: <IconLock/>, link: 'secure', label: 'Безопасность' },
  ];

  const menuItemsSeller = [
    { icon: <BiBag/>, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage/>, link: '#', label: 'Товары' },
    { icon: <IconBag/>, link: '#', label: 'Заказы' },
    { icon: <IconMessage/>, link: '#', label: 'Сообщения' },
    { icon: <IconLock/>, link: '#', label: 'Безопасность' },
  ];

  return (
    <main className="account-page">
      <SidebarLeft
        menuItems={menuItemsBuyer}
        icon1={<IconTrash/>}
        text1={'Выйти'}
        icon2={<IconExit/>}
        text2={'Удалить аккаунт'}
        phone="8-800-800-00-00"
      />
      <Outlet/>
    </main>
  );
};

export default AccountPage;
