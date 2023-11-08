import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import * as AppApi from '../../../shared/api/AppApi';
import { OrdersList } from '../../../entities/orders';
import { accountModel } from '../../../entities/account';
import Preloader from '../../../components/UI/Preloader/Preloader';

import './OrdersDashboard.scss';

const OrdersDashboard = () => {
  const { user } = accountModel.useAccount();
  const [preloader, setPreloader] = useState(true);
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    AppApi.orders
      .getOrders(auth_token)
      .then((res) => {
        if (res.results.length) {
          setOrders(res.results);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloader(false));
  }, []);

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

  if (preloader) return <Preloader />;

  return (
    <div className="orders-dashboard">
      {/*<form*/}
      {/*  onSubmit={(e) => e.preventDefault()}*/}
      {/*  className={clsx('orders-dashboard__search-form', {*/}
      {/*    'orders-dashboard__search-form_disabled': preloader,*/}
      {/*  })}*/}
      {/*>*/}
      {/*  <AppInput disabled={preloader} mode="primary" mode="text" placeholder="Поиск" />*/}
      {/*  <button className="orders-dashboard__search-button" mode="submit">*/}
      {/*    <IconSearch />*/}
      {/*  </button>*/}
      {/*</form>*/}
      {/*<OrdersSortingMenu />*/}
      <OrdersList orders={orders} />
    </div>
  );
};

export { OrdersDashboard };
