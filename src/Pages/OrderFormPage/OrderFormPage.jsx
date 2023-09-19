import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderFormPage.scss';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderDetailHeader from '../../components/OrderDetail/OrderDetailHeader/OrderDetailHeader';
import { useSelector } from 'react-redux';
import OrderDetailContentOrderPage from '../../components/OrderDetail/OrderDetailContentOrderPage/OrderDetailContentOrderPage';
import { Button } from '../../components/UI/Button/Button';
import { formatDateUnixTimestamp, getCalculateProductInfo } from '../../utils/utils';

const OrderFormPage = () => {
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

  return (
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
            //onClick={handleNavigateToOrder}
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
  );
};

export default OrderFormPage;
