import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderPage.scss';

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cameFromBasket = location.state?.cameFromBasket;
    if (!cameFromBasket) {
      navigate('/basket');
    }
  }, []);

  return <section className="order-page"></section>;
};

export default OrderPage;
