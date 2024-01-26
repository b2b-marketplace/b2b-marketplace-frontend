import clsx from 'clsx';
import React from 'react';

import { AppList, AppListHeader, AppListItem } from '../../../../shared/ui/AppList';

import { FavoriteProductItem } from './FavoriteProductItem';

import './FavoriteProductList.scss';

const fieldset = [
  {
    name: 'Артикул / наименование / поставщик',
    options: {
      onClick: () => {},
      class: 'favorite-products-list__label-product-seller',
      style: {},
    },
  },
  {
    name: 'Кол-во',
    options: {
      onClick: () => {},
      class: 'favorite-products-list__label-quantity',
      style: {},
    },
  },
  {
    name: 'Стоимость',
    options: {
      onClick: () => {},
      class: 'favorite-products-list__label-price',
      style: {},
    },
  },
  {
    name: 'Добавить',
    options: {
      onClick: () => {},
      class: 'favorite-products-list__label-button',
      style: {},
    },
  },
];

const FavoriteProductsList = ({ list, isSelectItems, handleClickCheckbox, className }) => {
  return (
    <div className={clsx('favorite-products-list', className)}>
      <AppListHeader fieldset={fieldset} />
      <AppList>
        {list?.map((product) => (
          <AppListItem key={product.id}>
            <FavoriteProductItem
              checkboxChecked={isSelectItems.includes(product.id)}
              handleClickCheckbox={handleClickCheckbox}
              item={product}
            />
          </AppListItem>
        ))}
      </AppList>
    </div>
  );
};

export { FavoriteProductsList };
