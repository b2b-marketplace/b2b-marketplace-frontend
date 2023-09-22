import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderFormPage.scss';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderDetailHeader from '../../components/OrderDetail/OrderDetailHeader/OrderDetailHeader';
import { useDispatch, useSelector } from 'react-redux';
import OrderDetailContentOrderPage from '../../components/OrderDetail/OrderDetailContentOrderPage/OrderDetailContentOrderPage';
import { Button } from '../../components/UI/Button/Button';
import { formatDateUnixTimestamp, getCalculateProductInfo } from '../../utils/utils';
import usePopup from '../../hooks/usePopup';
import accountApi from '../../utils/accountApi';
import { updateAllProduct } from '../../store/slices/basketSlice';
import OrderPopup from '../../components/PopupsRedux/OrderPopup/OrderPopup';

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
        //dispatch(updateAllProduct())
        openOrderPopup();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <section className="order-form-page">
        <OrderForm productList={currentProductList} extraClassName="order-form-page__container" />
        <SidebarRight>
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
              size="xl"
              //onClick={openOrderPopup}
              onClick={handleOrderConfirm}
              primary
              dark
              // disabled={!selectedProductId.length}
              label={'Подтвердить заказ'}
            >
              Подтвердить заказ
            </Button>
          </OrderDetail>
        </SidebarRight>
      </section>
      <OrderPopup />
    </>
  );
};

export default OrderFormPage;
