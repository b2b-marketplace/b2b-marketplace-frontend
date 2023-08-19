import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarLeft from '../../SidebarLeft/SidebarLeft';
import AccountBuyerCompany from './AccountBuyerCompany/AccountBuyerCompany';
import AccountCompanyIndividual from './@AccountCompanyIndividual/AccountCompanyIndividual';
import AccountSellerCompany from './AccountSellerCompany/AccountSellerCompany';
import IconTrash from '../../UI/Icon/Icon_trash';
import IconExit from '../../UI/Icon/Icon_exit';
import BiBag from '../../UI/Icon/Icon_bibag';
import IconPackage from '../../UI/Icon/Icon_package';
import IconHearth from '../../UI/Icon/Icon_hearth';
import IconBag from '../../UI/Icon/Icon_bag';
import IconMessage from '../../UI/Icon/Icon_message';
import IconLock from '../../UI/Icon/Icon_lock';
import IconBasket from '../../UI/Icon/Icon_basket';

const AccountPage = () => {
  const menuItemsBuyer = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Закупки' },
    {
      icon: <IconHearth className={'account-company-buyer__icon'} />,
      link: '#',
      label: 'Избранное',
    },
    { icon: <IconBasket />, link: '#', label: 'Корзина' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  const menuItemsIndividual = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Закупки' },
    {
      icon: <IconHearth className={'account-company-buyer__icon'} />,
      link: '#',
      label: 'Избранное',
    },
    { icon: <IconBag />, link: '#', label: 'Корзина' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  const menuItemsSeller = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Товары' },
    { icon: <IconBag />, link: '#', label: 'Заказы' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  return (
    <div>
      <Routes>
        <Route path="/buyer">
          <SidebarLeft
            menuItems={menuItemsBuyer}
            icon1={<IconTrash />}
            text1={'Выйти'}
            icon2={<IconExit />}
            text2={'Удалить аккаунт'}
            phone="8-800-800-00-00"
          />
          <AccountBuyerCompany />
        </Route>
        <Route path="/individual">
          <SidebarLeft
            menuItems={menuItemsIndividual}
            icon1={<IconTrash />}
            text1={'Выйти'}
            icon2={<IconExit />}
            text2={'Удалить аккаунт'}
            phone="8-800-800-00-00"
          />
          <AccountCompanyIndividual />
        </Route>
        <Route path="/seller">
          <SidebarLeft
            menuItems={menuItemsSeller}
            icon1={<IconTrash />}
            text1={'Выйти'}
            icon2={<IconExit />}
            text2={'Удалить аккаунт'}
            phone="8-800-800-00-00"
          />
          <AccountSellerCompany />
        </Route>
      </Routes>
    </div>
  );
};

export default AccountPage;
