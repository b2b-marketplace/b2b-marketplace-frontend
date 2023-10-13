import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuVerticalWidget.scss';
import { formatPhoneNumber } from '../shared/lib/utils';
import MenuVertical from '../components/Menu/MenuVertical/MenuVertical';
import IconExit from '../components/UI/Icon/Icon_exit';
import { PHONE_NUMBER } from '../shared/config/constants';

/**
 *
 * @param menuItems
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const MenuVerticalWidget = ({ menuItems }) => {
  return (
    <div className="menu-vertical-widget">
      <MenuVertical menuItems={menuItems} />
      <div className="menu-vertical-widget__footer">
        <Link className="menu-vertical-widget__link" to="/logout">
          <IconExit />
        </Link>
        <Link target="_blank" className="menu-vertical-widget__link" to={`tel:${PHONE_NUMBER}`}>
          {`${formatPhoneNumber(PHONE_NUMBER)}`}
        </Link>
        <p className="menu-vertical-widget__phone-desc">Звонок бесплатный</p>
      </div>
    </div>
  );
};

export default MenuVerticalWidget;
