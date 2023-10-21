import { Outlet } from 'react-router-dom';

import { MenuOrders } from '../../../widgets/menu';
import { Container } from '../../../shared/ui/Layout';
import Input from '../../../components/UI/Input/Input';
import IconSearch from '../../../components/UI/Icon/Icon_search';
import { Button } from '../../../components/UI/Button/Button';
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
        {/*<Button*/}
        {/*  extraClass="orders-list-page__control-button"*/}
        {/*  primary={false}*/}
        {/*  type="button"*/}
        {/*  size="s"*/}
        {/*>*/}
        {/*  Новая заявка*/}
        {/*</Button>*/}
        <form onSubmit={(e) => e.preventDefault()} className="orders-list-page__search">
          <Input mode="primary" type="text" placeholder="Поиск" />
          <button className="orders-list-page__search-button" type="submit">
            <IconSearch />
          </button>
        </form>
      </div>
      <div className="orders-list-page__main">
        <div className="orders-list-page__navigation">
          <MenuOrders />
        </div>

        <Outlet />
      </div>
    </Container>
  );
};

export { OrdersListPage };
