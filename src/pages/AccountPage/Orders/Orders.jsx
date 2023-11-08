import { OrdersDashboard } from '../../../widgets/orders';
import { AccountHeader } from '../../../widgets/account';

import './Orders.scss';

const Orders = () => {
  return (
    <div className="orders">
      {/*<AccountHeader />*/}
      <h1 className="orders__title">Мои Заказы</h1>
      <OrdersDashboard />
    </div>
  );
};

export { Orders };
