import React from 'react';
import PropTypes from 'prop-types';

import { AppListHeader, AppListItem, AppList } from '../../../../shared/ui/AppList';

import { OrderItem } from './OrderItem';

import './OrdersList.scss';

const labels = [
  { name: 'Дата/№', class: '', style: {} },
  { name: 'Поставщик', class: '', style: {} },
  { name: 'Доставка', class: '', style: {} },
  { name: 'Адрес', class: '', style: { width: '246px' } },
  'Стоимость',
  'Статус',
];

/**
 * Компонент для отображения списка заказов.
 *
 * @param {Array} orders - Массив заказов для отображения.
 * @returns {JSX.Element}
 */
const OrdersList = ({ orders }) => {
  const viewOrdersList = (orders) => {
    return (
      <div className="orders-list">
        <AppListHeader list={labels} />
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

  const viewNotFound = () => {
    return <div className="favorites__empty">Мои заказы пусто</div>;
  };

  return orders && orders.length ? viewOrdersList(orders) : viewNotFound();
};

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export { OrdersList };
