import React from 'react';
import './OrderFormReceivingProduct.scss';
import TabsNavigation from '../TabNavigation/TabsNavigation';

const OrderFormReceivingProduct = () => {
  return (
    <div className="order-form-receiving-product">
      <h2 className="order-form-receiving-product__title">Способ получения</h2>
      <div className="order-form-receiving-product__main">
        <TabsNavigation extraClassName="order-form-receiving-product__tab-navigation" />
      </div>
    </div>
  );
};

export default OrderFormReceivingProduct;
