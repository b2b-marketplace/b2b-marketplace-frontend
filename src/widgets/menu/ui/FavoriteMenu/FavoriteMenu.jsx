import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { userModel } from '../../../../entities/user';
import { MenuHorizontal } from '../../../../shared/ui/menu';

import './FavoriteMenu.scss';

/**
 * Компонент навигации для вкладки "Мои Заказы" в личном кабинете.
 *
 * @param {string} className - Дополнительные классы CSS.
 * @returns {JSX.Element}
 * @constructor
 */
const FavoriteMenu = ({ className }) => {
  //const { user } = userModel.useGetUser();
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
    return () => {};
  }, []);

  return <MenuHorizontal onLinkClassName={currentClassName} menuItems={menuItemBuyer} />;
};

FavoriteMenu.propTypes = {
  className: PropTypes.string,
};

export { FavoriteMenu };
