import React from 'react';
import { Outlet } from 'react-router-dom';

import { Main, Sidebar } from '../../shared/ui/Layout';
import { AccountMenu } from '../../widgets/menu';

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
        <AccountMenu />
      </Sidebar>
      <Outlet />
    </Main>
  );
};

export { AccountPage };
