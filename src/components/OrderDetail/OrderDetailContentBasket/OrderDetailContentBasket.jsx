import React from 'react';

import { getNoun } from '../../../shared/lib/utils';

import './OrderDetailContentBasket.scss';

const OrderDetailContentBasket = ({ suppliersCount, productQuantity, productSumPrice }) => {
  return (
    <div className="order-detail-content-basket ">
      <div className="order-detail-content-basket__label">Итог:</div>
      <div className="order-detail-content-basket__content">
        <p className="order-detail-content-basket__suppliers">
          {`${suppliersCount} ${getNoun(suppliersCount, 'поставщик', 'поставщика', 'поставщиков')}`}
        </p>
        <p className="order-detail-content-basket__product">
          {`${productQuantity} ${getNoun(productQuantity, 'товар', 'товара', 'товаров')}`}
        </p>
      </div>
      <div className="order-detail-content-basket__price-total">{productSumPrice} ₽</div>
    </div>
  );
};

export default OrderDetailContentBasket;
