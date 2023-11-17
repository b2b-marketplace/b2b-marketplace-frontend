import { useSelector } from 'react-redux';
import React from 'react';

import { Preloader } from '../../../shared/ui/Preloader';
import { EmptyListMessage } from '../../../shared/ui/EmptyListMessage';
import { ButtonLoadMore } from '../../../features/app/Button';
import { OrdersList, useGetOrderList } from '../../../entities/order';

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
        <OrdersList orders={orders} />
      ) : (
        <EmptyListMessage>Список заказов пуст</EmptyListMessage>
      )}

      {isFetchingNextPage && <Preloader />}

      {hasNextPage && !isFetchingNextPage && (
        <ButtonLoadMore onClick={() => fetchNextPage()} disabled={isFetching}>
          Смотреть ещё
        </ButtonLoadMore>
      )}
    </div>
  );
};

export { OrdersDashboardPage };
