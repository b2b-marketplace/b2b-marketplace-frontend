import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SidebarLeft.scss';
import { useSelector } from 'react-redux';
import BiBag from '../UI/Icon/Icon_bibag';
import IconPackage from '../UI/Icon/Icon_package';
import IconHearth from '../UI/Icon/Icon_hearth';
import IconBasket from '../UI/Icon/Icon_basket';
import IconMessage from '../UI/Icon/Icon_message';
import IconLock from '../UI/Icon/Icon_lock';
import IconExit from '../UI/Icon/Icon_exit';
import IconBag from '../UI/Icon/Icon_bag';

const SidebarLeft = ({ extraClassName, children }) => {
  return <div className={`sidebar-left ${extraClassName || ''}`}> {children} </div>;
};

export default SidebarLeft;
