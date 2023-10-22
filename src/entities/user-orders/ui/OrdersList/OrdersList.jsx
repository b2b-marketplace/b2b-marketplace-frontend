import React from 'react';

import { OrderItem } from '../OrderItem';

import './OrdersList.scss';

const OrdersList = ({ ordersList }) => {
  // const { filter } = useParams();
  // const { page } = useParams();
  // const navigate = useNavigate();
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   if (filter === undefined) {
  //     setOrders(PRODUCTS);
  //   } else if (filter === 'in-transit') {
  //     setOrders(PRODUCTS.slice(0, 3));
  //   } else if (filter === 'received') {
  //     setOrders(PRODUCTS.slice(3, 5));
  //   } else if (filter === 'canceled') {
  //     setOrders(PRODUCTS.slice(5, 9));
  //   } else {
  //     navigate('/account/orders');
  //   }
  // }, [filter]);

  const viewOrdersList = ({ ordersList }) => {
    return (
      <div>
        <ul className="orders-list">
          {ordersList.map((order) => (
            <li className="orders-list__item" key={order.id}>
              <OrderItem order={order} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const viewNotFound = () => {
    return <div className="favorites__empty">Мои заказы пусто</div>;
  };

  return ordersList ? viewOrdersList(ordersList) : viewNotFound();
};

export default OrdersList;
