import React from 'react';
import './OrderDetailContentOrderPage.scss';

const OrderDetailContentOrderPage = ({ priceTotal, productQuantity }) => {
  return (
    <>
      <div className="order-detail-content-order-page">
        <div className="order-detail-content-order-page__container">
          <div className="order-detail-content-order-page__name-price">
            <div className="order-detail-content-order-page__name">Товары</div>
            <div className="order-detail-content-order-page__price">120 000 ₽</div>
          </div>
          <div className="order-detail-content-order-page__description">30 ед.</div>
        </div>
        <div className="order-detail-content-order-page__container">
          <div className="order-detail-content-order-page__name-price">
            <div className="order-detail-content-order-page__name">Доставка</div>
            <div className="order-detail-content-order-page__price">2 300 ₽</div>
          </div>
          <div className="order-detail-content-order-page__description">Пэк, 13 октября.</div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailContentOrderPage;
