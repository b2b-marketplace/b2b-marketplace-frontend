import React from 'react';

import { MenuFavorites } from '../../../widgets/menu';
import { AccountHeader } from '../../../widgets/account';
import Search from '../../../components/UI/Search/Search';
import DropDown from '../../../components/UI/DropDown/DropDown';
import { Button } from '../../../components/UI/Button/Button';
import Favorites from '../../../components/Favorites/Favorites';

import './AccountFavorites.scss';

const AccountFavorites = () => {
  return (
    <div className="account-favorites">
      <AccountHeader name="ООО «Компания»" title="Покупатель" />
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
        <MenuFavorites />
        <Favorites />
      </div>
    </div>
  );
};

export default AccountFavorites;
