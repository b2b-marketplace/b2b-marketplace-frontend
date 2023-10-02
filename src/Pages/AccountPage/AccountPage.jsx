import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './AccountPage.scss';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import MenuAccountWidget from '../../widgets/MenuAccountWidget';

const AccountPage = () => {
  return (
    <main className="account-page">
      <div className="account-page__sidebar-left">
        <SidebarLeft>
          <MenuAccountWidget />
        </SidebarLeft>
      </div>
      <Outlet />
    </main>
  );
};

export default AccountPage;
