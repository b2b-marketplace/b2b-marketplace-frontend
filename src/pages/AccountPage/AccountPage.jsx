import { Outlet } from 'react-router-dom';
import React from 'react';

import { MenuAccount } from '../../widgets/menu';
import { Main, Sidebar } from '../../shared/ui/Layout';

import './AccountPage.scss';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const AccountPage = () => {
  return (
    <Main className="account-page">
      <Sidebar type="left">
        <MenuAccount />
      </Sidebar>
      <Outlet />
    </Main>
  );
};

export { AccountPage };
