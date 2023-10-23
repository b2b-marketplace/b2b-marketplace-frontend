import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Container } from '../../../../shared/ui/Layout';
import { AppLink } from '../../../../shared/ui/AppLink';
import { USER_ROLE } from '../../../../shared/config/constants';
import { MenuVertical } from '../../../../entities/menu';
import { PhoneNumberCallout } from '../../../../entities/account';
import IconExit from '../../../../components/UI/Icon/Icon_exit';

import { menuItemsCustomer, menuItemsSupplier } from './mock';

import './MenuAccount.scss';

/**
 * Компонент боковой панели меню.
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const MenuAccount = () => {
  const { user } = useSelector((state) => state.account);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    return () => {
      const currentMenu =
        user && user.company.role === USER_ROLE.supplier ? menuItemsSupplier : menuItemsCustomer;
      console.log(user.company.role);
      console.log(currentMenu);
      setMenuItems(currentMenu);
    };
  }, []);

  return (
    <Container className="menu-account" border>
      <div className="menu-account__container">
        <MenuVertical menuItems={menuItems} />
      </div>
      <div className="menu-account__container">
        <AppLink type="gray" to="/logout">
          <IconExit />
        </AppLink>
        <PhoneNumberCallout />
      </div>
    </Container>
  );
};

MenuAccount.propTypes = {};

export { MenuAccount };
