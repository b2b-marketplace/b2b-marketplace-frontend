import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Main, Sidebar } from '../../shared/ui/Layout';
import { formatDateUnixTimestamp, getCalculateProductInfo } from '../../shared/lib/utils';
import usePopup from '../../shared/hooks/usePopup';
import { AppApi } from '../../shared/api';
import { Button } from '../../components/UI/Button/Button';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderDetailHeader from '../../components/OrderDetail/OrderDetailHeader/OrderDetailHeader';
import OrderDetailContentOrderPage from '../../components/OrderDetail/OrderDetailContentOrderPage/OrderDetailContentOrderPage';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { updateAllProduct } from '../../app/store/slices/basketSlice';

import './OrderFormPage.scss';

/**
 * Страница оформления заказа.
 *
 * @returns {JSX.Element}
 */
const OrderFormPage = () => {
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);
  const basketList = useSelector((state) => state.basket.basket);
  const { openPopup: openOrderPopup } = usePopup('order');

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [orderInfo, setOrderInfo] = useState({
    product_price_total: 0,
    product_quantity: 0,
    delivery_name: '',
    delivery_price: 0,
    delivery_date: 0,
  });
  const [currentProductList, setCurrentProductList] = useState([]);

  // Эффект, выполняющийся при инициализации страницы
  useEffect(() => {
    const cameFromBasket = location.state?.cameFromBasket;
    if (!cameFromBasket) {
      navigate('/basket');
    }

    return () => {};
  }, []);

  // Эффект, выполняющийся при изменении корзины
  useEffect(() => {
    const basketProductsList = basketList.basket_products.filter(
      (product) => product.checked && product.name
    );
    if (
      !basketProductsList.length ||
      (currentProductList.length && basketProductsList.length !== currentProductList.length)
    ) {
      navigate('/basket');
    }
    const { totalPrice, totalQuantity } = getCalculateProductInfo(basketProductsList);

    if (basketList.delivery_address) {
      const { name, price, deliveryDate } = basketList.delivery_address;
      setOrderInfo({
        product_price_total: totalPrice,
        product_quantity: totalQuantity,
        delivery_name: name,
        delivery_price: price,
        delivery_date: deliveryDate,
      });
    }
    setCurrentProductList(basketProductsList);
  }, [basketList]);

  // Обработчик подтверждения заказа
  const handleOrderConfirm = () => {
    const orderProductsList = currentProductList.map((product) => {
      return { product: product.id, quantity: product.quantity };
    });

    const order = {
      order_products: orderProductsList,
    };

    AppApi.account
      .addOrder(auth_token, order)
      .then((res) => {
        //console.log(res);
        const filteredArray1 = basketList.basket_products.filter(
          (item1) => !orderProductsList.some((item2) => item2.product === item1.id)
        );
        dispatch(updateAllProduct({ currentProductList: filteredArray1 }));
        openOrderPopup();
        navigate('/account/orders');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Main>
      <div className="order-form-page">
        <OrderForm productList={currentProductList} extraClassName="order-form-page__container" />
        <Sidebar type="right">
          <OrderDetail>
            <OrderDetailHeader title="Ваш заказ" />
            <OrderDetailContentOrderPage
              deliveryDate={formatDateUnixTimestamp(orderInfo.delivery_date)}
              deliveryName={orderInfo.delivery_name}
              deliveryPrice={orderInfo.delivery_price}
              productPriceTotal={orderInfo.product_price_total}
              productQuantity={orderInfo.product_quantity}
            />
            <Button size="l" onClick={handleOrderConfirm} primary dark label="Подтвердить заказ">
              Подтвердить заказ
            </Button>
          </OrderDetail>
        </Sidebar>
      </div>
    </Main>
  );
};

OrderFormPage.propTypes = {};

export default OrderFormPage;
