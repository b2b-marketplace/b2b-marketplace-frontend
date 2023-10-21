import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AccountTabNavigation.scss';

/**
 * Компонент навигации для вкладки "Мои Заказы" в личном кабинете.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @returns {JSX.Element}
 * @constructor
 */
const MenuOrders = ({ className }) => {
  const { user } = useSelector((state) => state.account);
  const [menuItems, setMenuItems] = useState([]);
  const menuItemsCustomer = [
    { key: 1, name: 'Все', link: '' },
    { key: 2, name: 'В пути', link: 'in-transit' },
    { key: 3, name: 'Полученные', link: 'received' },
    { key: 4, name: 'Отмененные', link: 'canceled' },
  ];
  const menuItemsSupplier = [
    { key: 1, name: 'Все', link: '' },
    { key: 2, name: 'На модерации', link: '' },
    { key: 3, name: 'Опубликованные', link: '' },
  ];

  const { filter } = useParams();

  const currentClassName = (isActive, item) =>
    clsx('menu-orders__link', {
      'menu-orders__link_active': isActive && (filter === item.link || (!filter && !item.link)),
    });

  useEffect(() => {
    return () => {
      const currentMenu = user?.company.role === 'supplier' ? menuItemsSupplier : menuItemsCustomer;
      setMenuItems(currentMenu);
    };
  }, []);

  return (
    <ul className={clsx('account-tab-navigation', className)}>
      {menuItems.map((item) => (
        <li key={item.key} className="menu-orders__item">
          <NavLink className={({ isActive }) => currentClassName(isActive, item)} to={item.link}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MenuOrders.propTypes = {
  className: PropTypes.string,
};

export { MenuOrders };
