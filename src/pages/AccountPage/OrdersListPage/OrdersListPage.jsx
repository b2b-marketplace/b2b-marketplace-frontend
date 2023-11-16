import { Outlet } from 'react-router-dom';

import './OrdersListPage.scss';

const OrdersListPage = () => {
  return (
    <div className="orders-list-page">
      <h1 className="orders-list-page__title">Мои Заказы</h1>
      <Outlet />
    </div>
  );
};

export { OrdersListPage };
