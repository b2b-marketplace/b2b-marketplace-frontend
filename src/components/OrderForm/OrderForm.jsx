import React from 'react';
import './OrderForm.scss';
import OrderFormReceiver from './OrderFormReceiver/OrderFormReceiver';
import OrderFormReceivingProduct from './OrderFormReceivingProduct/OrderFormReceivingProduct';

const OrderForm = ({ extraClassName }) => {
  return (
    <div className={`order-form ${extraClassName || ''}`}>
      <h1 className="order-form__title">Оформление заказа</h1>
      <div className="order-form__main">
        <OrderFormReceiver />
        <OrderFormReceivingProduct />
      </div>
    </div>
  );
};

export default OrderForm;
