import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import "./AccountPage.scss";
import SidebarLeft from '../../SidebarLeft/SidebarLeft';
import AccountBuyerCompany from './AccountBuyerCompany/AccountBuyerCompany';
import IconTrash from '../../UI/Icon/Icon_trash';
import IconExit from '../../UI/Icon/Icon_exit';
import BiBag from '../../UI/Icon/Icon_bibag';
import IconPackage from '../../UI/Icon/Icon_package';
import IconHearth from '../../UI/Icon/Icon_hearth';
import IconBag from '../../UI/Icon/Icon_bag';
import IconMessage from '../../UI/Icon/Icon_message';
import IconLock from '../../UI/Icon/Icon_lock';
import IconBasket from '../../UI/Icon/Icon_basket';
import AccountSellerProductAdd from "./AccountSellerProductAdd/AccountSellerProductAdd";

const AccountPage = () => {
  const menuItemsBuyer = [
    { icon: <BiBag/>, link: '#', label: 'Моя компания' },
    { icon: <IconPackage/>, link: '#', label: 'Закупки' },
    {
      icon: <IconHearth className={'account-company-buyer__icon'}/>,
      link: '#',
      label: 'Избранное',
    },
    { icon: <IconBasket/>, link: '#', label: 'Корзина' },
    { icon: <IconMessage/>, link: '#', label: 'Сообщения' },
    { icon: <IconLock/>, link: '#', label: 'Безопасность' },
  ];

  const menuItemsSeller = [
    { icon: <BiBag/>, link: 'profile', label: 'Моя компания' },
    { icon: <IconPackage/>, link: '#', label: 'Товары' },
    { icon: <IconBag/>, link: '#', label: 'Заказы' },
    { icon: <IconMessage/>, link: '#', label: 'Сообщения' },
    { icon: <IconLock/>, link: '#', label: 'Безопасность' },
  ];

  return (
    <div className="account-page">
      <SidebarLeft
        menuItems={menuItemsSeller}
        icon1={<IconTrash/>}
        text1={'Выйти'}
        icon2={<IconExit/>}
        text2={'Удалить аккаунт'}
        phone="8-800-800-00-00"
      />
      <Outlet/>
    </div>
  );
};

export default AccountPage;
