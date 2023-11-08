import React from 'react';

import './OrderDetail.scss';

const OrderDetail = () => {
  return (
    <div className="order-details">
      <span className="order-details__label">№ / дата / поставщик</span>
      <span className="order-details__label">Доставка / адрес</span>
      <span className="order-details__label">Товары</span>
      <span className="order-details__label">Стоимость</span>
      <span className="order-details__label">Статус</span>
    </div>
  );
};

export { OrderDetail };
