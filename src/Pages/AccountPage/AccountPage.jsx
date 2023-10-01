import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './AccountPage.scss';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import MenuAccountWidgets from '../../widgets/MenuAccountWidgets';

const AccountPage = () => {
  return (
    <main className="account-page">
      <div className="account-page__sidebar-left">
        <SidebarLeft>
          <MenuAccountWidgets />
        </SidebarLeft>
      </div>
      <Outlet />
    </main>
  );
};

export default AccountPage;
