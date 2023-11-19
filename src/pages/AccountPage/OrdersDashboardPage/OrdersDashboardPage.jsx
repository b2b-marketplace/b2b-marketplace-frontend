import { useSelector } from 'react-redux';
import React from 'react';

import { Preloader } from '../../../shared/ui/Preloader';
import { EmptyListMessage } from '../../../shared/ui/EmptyListMessage';
import { ButtonLoadMore } from '../../../features/app/Button';
import { OrderList, useGetOrderList } from '../../../entities/order';

import './OrdersDashboardPage.scss';

const OrdersDashboardPage = () => {
  const { orders, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useGetOrderList();

  const isLoading = isFetching && !orders.length;

  const renderOrders = () => {
    if (isLoading) return <Preloader />;
    if (!orders || !orders.length) return <EmptyListMessage>Список заказов пуст</EmptyListMessage>;
    return <OrderList orders={orders} />;
  };

  return (
    <div className="orders-dashboard-page">
      {renderOrders()}

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
