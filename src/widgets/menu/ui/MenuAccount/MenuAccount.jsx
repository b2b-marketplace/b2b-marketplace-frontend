import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Container } from '../../../../shared/ui/Layout';
import { AppLink } from '../../../../shared/ui/AppLink';
import { USER_ROLE } from '../../../../shared/config/constants';
import { MenuVertical } from '../../../../entities/menu';
import IconExit from '../../../../components/UI/Icon/Icon_exit';

import { PhoneNumberCallout } from './PhoneNumberCallout';
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
    console.log(USER_ROLE);
    const currentMenu =
      user && user.company.role === USER_ROLE.supplier ? menuItemsSupplier : menuItemsCustomer;
    setMenuItems(currentMenu);
    return () => {};
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
