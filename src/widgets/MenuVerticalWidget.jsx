import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuVerticalWidget.scss';
import { formatPhoneNumber } from '../utils/utils';
import MenuVertical from '../components/Menu/MenuVertical/MenuVertical';
import IconExit from '../components/UI/Icon/Icon_exit';
import { PHONE_NUMBER } from '../utils/constants';

const MenuVerticalWidget = ({ menuItems }) => {
  return (
    <div className="menu-vertical-widget">
      <MenuVertical menuItems={menuItems} />
      <div className="menu-account-widget__footer">
        <Link className="menu-account-widget__link" to="/logout">
          <IconExit />
        </Link>
        <Link target="_blank" className="menu-account-widget__link" to={`tel:${PHONE_NUMBER}`}>
          {`${formatPhoneNumber(PHONE_NUMBER)}`}
        </Link>
        <p className="menu-account-widget__phone-desc">Звонок бесплатный</p>
      </div>
    </div>
  );
};

export default MenuVerticalWidget;
