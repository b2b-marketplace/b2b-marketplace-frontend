import React from 'react';
import './OrderFormReceiver.scss';

const OrderFormReceiver = () => {
  return (
    <div className="order-form-receiver">
      <div className="order-form-receiver__fio">Афанасьев Александр Васильевич</div>
      <div className="order-form-receiver__phone">+ 7 999 999 00 00</div>
      <div className="order-form-receiver__email">mail@mail.ru</div>
    </div>
  );
};

export default OrderFormReceiver;
