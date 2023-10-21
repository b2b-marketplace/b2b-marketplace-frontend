import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Main, Sidebar } from '../../shared/ui/Layout';
import { formatDateUnixTimestamp, getCalculateProductInfo } from '../../shared/lib/utils';
import usePopup from '../../shared/hooks/usePopup';
import accountApi from '../../shared/api/accountApi';
import { Button } from '../../components/UI/Button/Button';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderDetailHeader from '../../components/OrderDetail/OrderDetailHeader/OrderDetailHeader';
import OrderDetailContentOrderPage from '../../components/OrderDetail/OrderDetailContentOrderPage/OrderDetailContentOrderPage';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { updateAllProduct } from '../../app/store/slices/basketSlice';

import './OrderFormPage.scss';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const OrderFormPage = () => {
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
  const basketList = useSelector((state) => state.basket.basket);
  const [currentProductList, setCurrentProductList] = useState([]);
  const { openPopup: openOrderPopup } = usePopup('order');
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const productList = basketList.basket_products.filter(
      (product) => product.checked && product.name
    );
    if (
      !productList.length ||
      (currentProductList.length && productList.length !== currentProductList.length)
    ) {
      navigate('/basket');
    }
    const { totalPrice, totalQuantity } = getCalculateProductInfo(productList);

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
    setCurrentProductList(productList);
  }, [basketList]);

  useEffect(() => {
    const cameFromBasket = location.state?.cameFromBasket;
    if (!cameFromBasket) {
      navigate('/basket');
    }

    return () => {};
  }, []);

  const handleOrderConfirm = () => {
    const orderProductList = currentProductList.map((product) => {
      return { product: product.id, quantity: product.quantity };
    });

    const order = {
      order_products: orderProductList,
    };
    accountApi
      .addOrder(auth_token, order)
      .then(() => {
        const filteredArray1 = basketList.basket_products.filter(
          (item1) => !orderProductList.some((item2) => item2.product === item1.id)
        );
        dispatch(updateAllProduct({ currentProductList: filteredArray1 }));
        openOrderPopup();
        // navigate("/account/profile");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Main className="account-page">
      <section className="order-form-page">
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
            <Button
              size="s"
              // onClick={openOrderPopup}
              onClick={handleOrderConfirm}
              primary
              dark
              // disabled={!selectedProductId.length}
              label="Подтвердить заказ"
            >
              Подтвердить заказ
            </Button>
          </OrderDetail>
        </Sidebar>
      </section>
    </Main>
  );
};

export default OrderFormPage;
