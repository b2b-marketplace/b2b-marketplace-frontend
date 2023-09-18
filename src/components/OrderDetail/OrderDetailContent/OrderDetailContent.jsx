import React from 'react';
import './OrderDetailContent.scss';
import OrderDetailContentOrderPage from './OrderDetailContentOrderPage/OrderDetailContentOrderPage';
import OrderDetailContentBasket from './OrderDetailContentBasket/OrderDetailContentBasket';

const OrderDetailContent = ({
  productSum,
  productCount,
  suppliersCount,
  extraClassName,
  deleviry,
  type,
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

  const initView = () => {
    if (type === 'orderView') return <OrderDetailContentOrderPage />;
    else {
      return (
        <OrderDetailContentBasket
          suppliersCount={getSuppliersText(suppliersCount)}
          productCount={getProductText(productCount)}
          productSumPrice={productSumPrice}
        />
      );
    }
  };

  return <div className={`order-detail-content ${extraClassName || ''}`}>{initView()}</div>;
};

export default OrderDetailContent;
