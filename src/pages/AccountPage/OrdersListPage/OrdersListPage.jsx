import { Outlet } from 'react-router-dom';

import { MenuOrders } from '../../../widgets/menu';
import { Container } from '../../../shared/ui/Layout';
import { AppInput } from '../../../shared/ui/AppInput';
import IconSearch from '../../../components/UI/Icon/Icon_search';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';

import logo from '../../../images/logofooter.svg';

import './OrdersListPage.scss';

const OrdersListPage = () => {
  return (
    <Container className="orders-list-page">
      <div className="orders-list-page__header">
        <AccountTitle logoSrc={logo} name="ООО «Компания»" title="Покупатель" />
      </div>
      <div className="orders-list-page__control">
        <form onSubmit={(e) => e.preventDefault()} className="orders-list-page__search">
          <AppInput mode="primary" type="text" placeholder="Поиск" />
          <button className="orders-list-page__search-button" type="submit">
            <IconSearch />
          </button>
        </form>
      </div>
      <div className="orders-list-page__main">
        <MenuOrders />
        <Outlet />
      </div>
    </Container>
  );
};

export { OrdersListPage };
