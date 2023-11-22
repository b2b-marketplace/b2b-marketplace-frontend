import React from 'react';
import clsx from 'clsx';

import './OrderTotalDetails.scss';

const OrderTotalDetails = ({ totalQuantity, totalPrice, className }) => {
  return (
    <div className={clsx('order-total-details', className)}>
      <div className="order-total-details__price-quantity-title">Общая стоимость и кол-во</div>
      <div className="order-total-details__price-quantity-value">
        <div className="order-total-details__price">{totalQuantity} шт.</div>
        <div className="order-total-details__quantity">{totalPrice} ₽</div>
      </div>
    </div>
  );
};

export { OrderTotalDetails };
