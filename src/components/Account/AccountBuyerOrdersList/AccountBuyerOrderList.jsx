import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import OrderListItem from './OrderListItem/OrderListItem';
import { PRODUCTS } from '../../../shared/api/productCardExample';
import './AccountBuyerOrderList.scss';

const AccountBuyerOrderList = () => {
  const { filter } = useParams();
  const { page } = useParams();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (filter === undefined) {
      setOrders(PRODUCTS);
    } else if (filter === 'in-transit') {
      setOrders(PRODUCTS.slice(0, 3));
    } else if (filter === 'received') {
      setOrders(PRODUCTS.slice(3, 5));
    } else if (filter === 'canceled') {
      setOrders(PRODUCTS.slice(5, 9));
    } else {
      navigate('/account/orders');
    }
  }, [filter]);

  return (
    <div>
      <ul className="account-buyer-order-list">
        {orders?.map((order) => (
          <li className="account-buyer-order-list__item" key={order.id}>
            <OrderListItem order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountBuyerOrderList;
