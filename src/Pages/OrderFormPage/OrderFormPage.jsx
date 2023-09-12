import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderFormPage.scss';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

const OrderFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cameFromBasket = location.state?.cameFromBasket;
    if (!cameFromBasket) {
      navigate('/basket');
    }
  }, []);

  return (
    <section className="order-form-page">
      <OrderForm extraClassName="order-form-page__container" />

      <SidebarRight>
        <OrderDetail></OrderDetail>
      </SidebarRight>
    </section>
  );
};

export default OrderFormPage;
