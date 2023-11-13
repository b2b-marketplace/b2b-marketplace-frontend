import { OrdersDashboard } from "../../../widgets/orders";

import './Orders.scss';

const Orders = () => {
  return (
    <div className="orders">
      <h1 className="orders__title">Мои Заказы</h1>
      <OrdersDashboard />
    </div>
  );
};

export { Orders };
