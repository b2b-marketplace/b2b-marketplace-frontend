import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { MenuHorizontal } from '../../../../entities/menu/ui/MenuHorizontal';

import './MenuFavorites.scss';

/**
 * Компонент навигации для вкладки "Мои Заказы" в личном кабинете.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @returns {JSX.Element}
 * @constructor
 */
const MenuFavorites = ({ className }) => {
  const { user } = useSelector((state) => state.account);
  const [menuItems, setMenuItems] = useState([]);
  const menuItemBuyer = [
    { key: 1, name: 'Все', link: '' },
    { key: 2, name: 'Нет в наличии', link: 'out-of-stock' },
    { key: 3, name: 'Сравнение', link: 'comparison' },
  ];
  const { filter } = useParams();

  const currentClassName = (isActive, item) =>
    clsx('menu-horizontal__link', {
      'menu-horizontal__link_active': isActive && (filter === item.link || (!filter && !item.link)),
    });

  useEffect(() => {
    return () => {
      setMenuItems(menuItemBuyer);
    };
  }, []);

  return <MenuHorizontal onLinkClassName={currentClassName} menuItems={menuItems} />;
};

MenuFavorites.propTypes = {
  className: PropTypes.string,
};

export { MenuFavorites };
