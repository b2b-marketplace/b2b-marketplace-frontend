import React from 'react';
import PropTypes from 'prop-types';

import { OrderItem } from '../OrderItem';
import { OrderDetail } from '../OrderDetail';

import './OrdersList.scss';

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
        <OrderDetail />
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul role="list" className="orders-list__list">
          {orders.map((order) => (
            <li className="orders-list__item" key={order.id}>
              <OrderItem order={order} />
            </li>
          ))}
        </ul>
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
