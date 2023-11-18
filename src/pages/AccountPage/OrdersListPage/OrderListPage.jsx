import { Outlet } from 'react-router-dom';

import './OrdersListPage.scss';

const OrderListPage = () => {
  return (
    <div className="order-list-page">
      <h1 className="order-list-page__title">Мои Заказы</h1>
      <Outlet />
    </div>
  );
};

export { OrderListPage };
