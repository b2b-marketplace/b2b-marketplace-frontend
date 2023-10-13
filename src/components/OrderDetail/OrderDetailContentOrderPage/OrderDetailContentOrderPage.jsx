import React from 'react';
import './OrderDetailContentOrderPage.scss';
import { priceFormat } from '../../../shared/lib/utils';

const OrderDetailContentOrderPage = ({
  productPriceTotal,
  productQuantity,
  deliveryPrice,
  deliveryName,
  deliveryDate,
}) => {
  return (
    <div className="order-detail-content-order-page">
      <div className="order-detail-content-order-page__containers">
        <div className="order-detail-content-order-page__container">
          <div className="order-detail-content-order-page__name-price">
            <div className="order-detail-content-order-page__name">Товары</div>
            <div className="order-detail-content-order-page__price">
              {priceFormat(productPriceTotal)} ₽
            </div>
          </div>
          <div className="order-detail-content-order-page__description">{productQuantity} ед.</div>
        </div>
        <div className="order-detail-content-order-page__container">
          <div className="order-detail-content-order-page__name-price">
            <div className="order-detail-content-order-page__name">Доставка</div>
            <div className="order-detail-content-order-page__price">
              {priceFormat(deliveryPrice)} ₽
            </div>
          </div>
          <div className="order-detail-content-order-page__description">
            {deliveryName}, {deliveryDate}.
          </div>
        </div>
      </div>
      <div className="order-detail-content-order-page__price-detail">
        <div className="order-detail-content-order-page__name_price">Итого</div>
        <span className="order-detail-content-order-page__price-total">
          {priceFormat(parseFloat(productPriceTotal) + parseFloat(deliveryPrice))} ₽
        </span>
      </div>
    </div>
  );
};

export default OrderDetailContentOrderPage;
