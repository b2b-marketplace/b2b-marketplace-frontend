import React from 'react';
import './OrderFormReceivingProduct.scss';
import TabsNavigation from '../../UI/TabNavigation/TabsNavigation';
import DeliveryWarehouseAddressList from '../DeliveryWarehouseAddressList/DeliveryWarehouseAddressList';

const OrderFormReceivingProduct = () => {
  const handleChangeDelivery = (stock) => {
    //console.log(stock);
  };

  return (
    <div className="order-form-receiving-product">
      <h2 className="order-form-receiving-product__title">Способ получения</h2>
      <div className="order-form-receiving-product__main">
        <TabsNavigation
          extraClassName="order-form-receiving-product__tab-navigation"
          tabElements={[
            {
              id: 1,
              default: true,
              name: 'Самовывоз со склада',
              element: <DeliveryWarehouseAddressList onChange={handleChangeDelivery} />,
            },
            { id: 2, name: 'Доставка ', element: 'Тут что то будет' },
          ]}
        />
      </div>
    </div>
  );
};

export default OrderFormReceivingProduct;
