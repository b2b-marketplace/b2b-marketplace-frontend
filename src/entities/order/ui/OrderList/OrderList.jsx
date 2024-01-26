import PropTypes from 'prop-types';
import React from 'react';

import { AppListHeader, AppListItem, AppList } from '../../../../shared/ui/AppList';

import { OrderItem } from './OrderItem';

import './OrderList.scss';

/**
 * Компонент для отображения списка заказов.
 *
 * @param {Array} list - Массив заказов для отображения.
 * @returns {JSX.Element}
 */
const OrderList = ({ list }) => {
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
        {list?.map((order) => (
          <AppListItem key={order.id}>
            <OrderItem item={order} />
          </AppListItem>
        ))}
      </AppList>
    </div>
  );
};

OrderList.propTypes = {
  list: PropTypes.array.isRequired,
};

export { OrderList };
