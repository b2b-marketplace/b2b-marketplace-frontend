import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './AccountTabNavigation.scss';

const AccountTabNavigation = ({ menuList }) => {
  const { filter } = useParams();

  return (
    <ul className="account-tab-navigation">
      {menuList.map((item) => (
        <li key={item.key} className="account-tab-navigation__item">
          <NavLink
            className={({ isActive }) =>
              `account-tab-navigation__link ${
                isActive && (filter === item.link || (!filter && !item.link))
                  ? 'account-tab-navigation__link_active'
                  : ''
              }`
            }
            to={item.link}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AccountTabNavigation;
