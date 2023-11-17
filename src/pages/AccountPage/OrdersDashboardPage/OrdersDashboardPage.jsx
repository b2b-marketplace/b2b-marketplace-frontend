import { useSelector } from 'react-redux';
import React from 'react';

import { Preloader } from '../../../shared/ui/Preloader';
import { EmptyListMessage } from '../../../shared/ui/EmptyListMessage';
import { ButtonLoadMore } from '../../../features/app/Button';
import { OrderList, useGetOrderList } from '../../../entities/order';

import './OrdersDashboardPage.scss';

const OrdersDashboardPage = () => {
  const { auth_token } = useSelector((state) => state.auth);

  const { orders, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useGetOrderList(auth_token);

  if (isFetching && !orders.length) {
    return <Preloader />;
  }

  return (
    <div className="orders-dashboard-page">
      {orders && orders.length ? (
        <OrderList orders={orders} />
      ) : (
        <EmptyListMessage>Список заказов пуст</EmptyListMessage>
      )}

      {isFetchingNextPage && <Preloader />}

      {hasNextPage && !isFetchingNextPage && (
        <ButtonLoadMore
          className="orders-dashboard-page__button-load-more"
          onClick={fetchNextPage}
          disabled={isFetching}
        >
          Смотреть ещё
        </ButtonLoadMore>
      )}
    </div>
  );
};

export { OrdersDashboardPage };
