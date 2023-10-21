import React from 'react';

import { MenuOrders } from '../../../widgets/menu';
import Search from '../../../components/UI/Search/Search';
import DropDown from '../../../components/UI/DropDown/DropDown';
import { Button } from '../../../components/UI/Button/Button';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import Favorites from '../../../components/Favorites/Favorites';

import './AccountFavorites.scss';

const AccountFavorites = () => {
  const menuItemBuyer = [
    { key: 1, name: 'Все', link: '' },
    { key: 2, name: 'Нет в наличии', link: 'out-of-stock' },
    { key: 3, name: 'Сравнение', link: 'comparison' },
  ];

  return (
    <div className="account-favorites">
      <AccountTitle name="ООО «Компания»" title="Покупатель" />
      <div className="account-favorites__container">
        <Button type="button" size="s" primary={false}>
          Новая заявка
        </Button>
        <Search size="large" />
        <DropDown
          options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
          className="medium"
          placeholder="Сортировать"
        />
      </div>
      <div className="account-favorites__control">
        <MenuOrders menuList={menuItemBuyer} />
        <Favorites />
      </div>
    </div>
  );
};

export default AccountFavorites;
