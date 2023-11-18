import React from 'react';

import './OrderTotalDetails.scss';

const OrderTotalDetails = ({ totalQuantity, totalPrice }) => {
  return (
    <div className="order-total-details">
      <div className="order-total-details__price-quantity-title">Общая стоимость и кол-во</div>
      <div className="order-total-details__price-quantity-value">
        <div className="order-total-details__price">{totalQuantity} шт.</div>
        <div className="order-total-details__quantity">{totalPrice} ₽</div>
      </div>
    </div>
  );
};

export { OrderTotalDetails };
