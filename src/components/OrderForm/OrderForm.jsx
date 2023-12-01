import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { basketModel } from '../../entities/basket';
import ProductCardHorizontal from '../ProductElements/ProductCardHorizontal/ProductCardHorizontal';
import TabsNavigation from '../UI/TabNavigation/TabsNavigation';

import DeliveryWarehouseAddressList from './DeliveryWarehouseAddressList/DeliveryWarehouseAddressList';
import OrderFormReceiver from './OrderFormReceiver/OrderFormReceiver';

import './OrderForm.scss';

const OrderForm = ({ extraClassName, productList }) => {
  const dispatch = useDispatch();
  // const deliveryAddressList = useSelector((state) => state.basket.basket.delivery_address || []);

  const handleGetStockAddr = useCallback((stock) => {
    dispatch(basketModel.addDeliveryAddress({ deliveryAddress: stock }));
  }, []);

  return (
    <div className={`order-form ${extraClassName || ''}`}>
      <h1 className="order-form__title">Оформление заказа</h1>
      <div className="order-form__main">
        <div className="order-form__container">
          <h2 className="order-form__title order-form__title_h2">Данные получатель</h2>
          <div className="order-form__content">
            <OrderFormReceiver />
          </div>
        </div>

        <div className="order-form__container">
          <h2 className="order-form__title order-form__title_h2">Способ получения</h2>
          <div className="order-form__content">
            <TabsNavigation
              extraClassName="order-form__tab-navigation"
              tabElements={[
                {
                  id: 1,
                  default: true,
                  name: 'Доставка',
                  element: <DeliveryWarehouseAddressList onGetStockAddr={handleGetStockAddr} />,
                },
                // {
                //   id: 2,
                //   name: 'Доставка ',
                //   element: 'Тут что то будет'
                // },
              ]}
            />
          </div>
        </div>

        <div className="order-form__container">
          <h2 className="order-form__title order-form__title_h2">Товары в заказе</h2>
          <div className="order-form__content">
            <ul className="basket__product-list">
              {productList?.map((product) => (
                <li className="basket__product-item" key={product.id} data-id={product.id}>
                  <ProductCardHorizontal
                    mode="orderForm"
                    isCheckboxChecked={product.checked}
                    onClickCheckbox={() => {}}
                    product={product}
                    className="basket__product"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
