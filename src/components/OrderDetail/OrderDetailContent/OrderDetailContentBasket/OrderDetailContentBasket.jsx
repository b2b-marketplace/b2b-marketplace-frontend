import React from 'react';
import './OrderDetailContentBasket.scss';

const OrderDetailContentBasket = ({ suppliersCount, productCount, productSumPrice }) => {
  return (
    <>
      <div className="order-detail-content-basket ">
        <div className="order-detail-content-basket__label">Итог:</div>
        <div className="order-detail-content-basket__content">
          <p className="order-detail-content-basket__suppliers">{suppliersCount}</p>
          <p className="order-detail-content-basket__product">{productCount}</p>
        </div>
      </div>
      <div className="order-detail-content-basket__price-total">{productSumPrice} ₽</div>
    </>
  );
};

export default OrderDetailContentBasket;
