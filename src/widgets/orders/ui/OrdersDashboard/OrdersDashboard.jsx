import { useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';

import * as AppApi from '../../../../shared/api/AppApi';
import { OrdersList } from '../../../../features/orders';
import { accountModel } from '../../../../entities/account';
import Preloader from '../../../../components/UI/Preloader/Preloader';
import { Button } from '../../../../components/UI/Button/Button';

import './OrdersDashboard.scss';

/**
 * Компонент для отображения панели управления заказами пользователя.
 *
 * @returns {JSX.Element}
 * @constructor
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const OrdersDashboard = () => {
  const { auth_token } = useSelector((state) => state.auth);

  const { user } = accountModel.useAccount();
  const [preloaderPage, setPreloaderPage] = useState(true);
  const [preloaderOrdersList, setPreloaderOrdersList] = useState(false);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(2);
  const [moreLoad, setMoreLoad] = useState(true);

  /**
   * Запрос списка заказов с сервера.
   *
   * @param {number} [page] - Номер страницы для подгрузки следующих заказов.
   */
  const getOrdersList = (page) => {
    if (page) {
      setPreloaderOrdersList(true);
      AppApi.orders
        .getOrders(auth_token, page)
        .then((res) => {
          if (res.results.length) {
            setOrders((prevOrders) => [...prevOrders, ...res.results]);
            setPage(page + 1);
            if (!res.next) {
              setMoreLoad(false);
            }
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setPreloaderOrdersList(false));
    } else {
      AppApi.orders
        .getOrders(auth_token)
        .then((res) => {
          if (res.results.length) {
            setOrders(res.results);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setPreloaderPage(false));
    }
  };

  useEffect(() => {
    getOrdersList();
  }, []);

  /**
   * Обработчик кнопки "Смотреть ещё" для подгрузки следующей порции заказов.
   */
  const handleGetOrdersList = useCallback(() => {
    getOrdersList(page);
  }, [page]);

  if (preloaderPage) return <Preloader />;

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
      {preloaderOrdersList && <Preloader />}
      {moreLoad && !preloaderOrdersList && (
        <Button
          extraClass={'orders-list__button'}
          primary
          disabled={preloaderPage}
          dark
          size="xl"
          onClick={handleGetOrdersList}
        >
          Смотреть ещё
        </Button>
      )}
    </div>
  );
};

export { OrdersDashboard };
