import React, { Suspense } from 'react';
import clsx from 'clsx';

import { AppList, AppListHeader, AppListItem } from '../../../../shared/ui/AppList';

import { OrderProductItem } from './OrderProductItem';

import './OrderProductList.scss';

const fieldset = [
  {
    name: '№',
    options: {
      onClick: () => {},
      class: 'order-product-item__number',
      style: {},
    },
  },
  {
    name: 'Товар',
    options: {
      onClick: () => {},
      class: 'order-product-item__details',
      style: {},
    },
  },
  {
    name: 'Описание',
    options: {
      onClick: () => {},
      class: 'order-product-item__description',
      style: {},
    },
  },
  {
    name: 'Кол-во',
    options: {
      onClick: () => {},
      class: 'order-product-item__price',
      style: {},
    },
  },
  {
    name: 'Стоимость',
    options: {
      onClick: () => {},
      class: 'order-product-item__quantity',
      style: {},
    },
  },
];

const OrderProductList = ({ products, className }) => {
  return (
    <div className={clsx('order-product-list', className)}>
      <AppListHeader fieldset={fieldset} />
      <AppList>
        {products.map((product, index) => (
          <AppListItem key={index}>
            <OrderProductItem item={product} index={index + 1} />
          </AppListItem>
        ))}
      </AppList>
    </div>
  );
};

export { OrderProductList };
