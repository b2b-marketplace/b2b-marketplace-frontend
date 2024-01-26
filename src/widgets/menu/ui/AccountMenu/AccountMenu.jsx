import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import IconExit from '../../../../components/UI/Icon/Icon_exit';
import { userModel } from '../../../../entities/user';
import { USER_ROLE } from '../../../../shared/config/constants';
import { AppLink } from '../../../../shared/ui/AppLink';
import { MenuVertical } from '../../../../shared/ui/menu';

import { menuItemsCustomer, menuItemsSupplier } from './mock';
import { PhoneNumberCallout } from './PhoneNumberCallout';

import './AccountMenu.scss';

/**
 * Компонент боковой панели меню.
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const AccountMenu = () => {
  const { user } = userModel.useGetUser();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const currentMenu =
      user && user.company.role === USER_ROLE.supplier ? menuItemsSupplier : menuItemsCustomer;
    setMenuItems(currentMenu);
    return () => {};
  }, []);

  return (
    <div className="account-menu">
      <div className="account-menu__container">
        <MenuVertical menuItems={menuItems} />
      </div>
      <div className="account-menu__container">
        <AppLink type="gray" to="/logout">
          <IconExit />
        </AppLink>
        <PhoneNumberCallout />
      </div>
    </div>
  );
};

AccountMenu.propTypes = {};

export { AccountMenu };
