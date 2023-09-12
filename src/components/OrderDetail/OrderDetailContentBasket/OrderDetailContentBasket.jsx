import React from 'react';
import './OrderDetailContentBasket.scss';

const OrderDetailContentBasket = ({
  productSum,
  productCount,
  suppliersCount,
  extraClassName,
  ...props
}) => {
  const productSumPrice = new Intl.NumberFormat('ru-RU').format(parseFloat(productSum));

  function getProductText(count) {
    if (count === 1) {
      return `${count} товар`;
    } else if (count >= 2 && count <= 4) {
      return `${count} товара`;
    } else {
      return `${count} товаров`;
    }
  }

  function getSuppliersText(count) {
    if (count === 1) {
      return `${count} поставщик`;
    } else if (count >= 2 && count <= 4) {
      return `${count} поставщика`;
    } else {
      return `${count} поставщиков`;
    }
  }

  return (
    <div className={`order-detail-content-basket ${extraClassName || ''}`}>
      <div className="order-detail-content-basket__total">
        <div className="order-detail-content-basket__label">Итог:</div>
        <div className="order-detail-content-basket__content">
          <p className="order-detail-content-basket__suppliers">
            {getSuppliersText(suppliersCount)}
          </p>
          <p className="order-detail-content-basket__product">{getProductText(productCount)}</p>
        </div>
      </div>
      <div className="order-detail-content-basket__price-total">{productSumPrice} ₽</div>
    </div>
  );
};

export default OrderDetailContentBasket;
