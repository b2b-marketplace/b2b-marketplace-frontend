import React from 'react';
import PropTypes from 'prop-types';

import { AppListHeader, AppListItem, AppList } from '../../../../shared/ui/AppList';

import { OrderItem } from './OrderItem';

import './OrderList.scss';

/**
 * Компонент для отображения списка заказов.
 *
 * @param {Array} orders - Массив заказов для отображения.
 * @returns {JSX.Element}
 */
const OrderList = ({ orders }) => {
  const fieldset = [
    {
      name: 'Дата/№',
      options: {
        onClick: () => {},
        class: 'order-item__date-order',
        style: {},
      },
    },
    {
      name: 'Поставщик',
      options: {
        onClick: () => {},
        class: 'order-item__company-info',
        style: {},
      },
    },
    {
      name: 'Доставка',
      options: {
        onClick: () => {},
        class: 'order-item__delivery-date',
        style: {},
      },
    },
    {
      name: 'Адрес',
      options: {
        onClick: () => {},
        class: 'order-item__delivery-address',
        style: {},
      },
    },
    {
      name: 'Стоимость',
      options: {
        onClick: () => {},
        class: 'order-item__total-price',
        style: {},
      },
    },
    {
      name: 'Статус',
      options: {
        onClick: () => {},
        class: 'order-item__status',
        style: {},
      },
    },
  ];

  return (
    <div className="order-list">
      <AppListHeader fieldset={fieldset} />
      <AppList>
        {orders.map((order) => (
          <AppListItem key={order.id}>
            <OrderItem item={order} />
          </AppListItem>
        ))}
      </AppList>
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export { OrderList };
