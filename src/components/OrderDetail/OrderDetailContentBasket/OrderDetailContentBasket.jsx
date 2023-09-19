import React from 'react';
import './OrderDetailContentBasket.scss';

const OrderDetailContentBasket = ({ suppliersCount, productQuantity, productSumPrice }) => {
  return (
    <>
      <div className="order-detail-content-basket ">
        <div className="order-detail-content-basket__label">Итог:</div>
        <div className="order-detail-content-basket__content">
          <p className="order-detail-content-basket__suppliers">{suppliersCount}</p>
          <p className="order-detail-content-basket__product">{productQuantity}</p>
        </div>
        <div className="order-detail-content-basket__price-total">{productSumPrice} ₽</div>
      </div>
    </>
  );
};

export default OrderDetailContentBasket;
