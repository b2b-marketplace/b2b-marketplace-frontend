import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderFormPage.scss';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderDetailHeader from '../../components/OrderDetail/OrderDetailHeader/OrderDetailHeader';
import OrderDetailContent from '../../components/OrderDetail/OrderDetailContent/OrderDetailContent';
import { useSelector } from 'react-redux';

const OrderFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productCount: 0,
    suppliersCount: 0,
  });
  const basketList = useSelector((state) => state.basket.basket);
  const [currentProductList, setCurrentProductList] = useState([]); // Состояние выбранной RadioButton
  useEffect(() => {
    setCurrentProductList(basketList.basket_products.filter((product) => product.checked));
  }, [basketList]);
  useEffect(() => {
    const cameFromBasket = location.state?.cameFromBasket;
    if (!cameFromBasket) {
      navigate('/basket');
    }
  }, []);

  return (
    <section className="order-form-page">
      <OrderForm productList={currentProductList} extraClassName="order-form-page__container" />
      <SidebarRight>
        <OrderDetail>
          <OrderDetailHeader title="Ваш заказ" />
          <OrderDetailContent
            type="orderView"
            productSum={orderInfo.productSum}
            productCount={orderInfo.productCount}
            suppliersCount={orderInfo.suppliersCount}
            extraClassName="basket__order-detail-content"
          />
        </OrderDetail>
      </SidebarRight>
    </section>
  );
};

export default OrderFormPage;
