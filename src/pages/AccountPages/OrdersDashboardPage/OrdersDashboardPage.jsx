import React from 'react';
import { useSelector } from 'react-redux';

import { OrderList, useGetOrderList } from '../../../entities/order';
import { LoadMoreButton } from '../../../features/app/Button';
import { EmptyListMessage } from '../../../shared/ui/EmptyListMessage';
import { Preloader } from '../../../shared/ui/Preloader';

import './OrdersDashboardPage.scss';

const OrdersDashboardPage = () => {
  const { data, orders, isFetching, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetOrderList();

  const isLoading = isFetching && !orders.length;

  const renderOrders = () => {
    if (isLoading) return <Preloader />;
    if (!orders || !orders.length) return <EmptyListMessage>Список заказов пуст</EmptyListMessage>;
    return <OrderList list={orders} />;
  };

  return (
    <div className="orders-dashboard-page">
      {renderOrders()}

      {isFetchingNextPage && <Preloader />}

      {hasNextPage && !isFetchingNextPage && (
        <LoadMoreButton onClick={fetchNextPage} disabled={isFetching}>
          Смотреть ещё
        </LoadMoreButton>
      )}
    </div>
  );
};

export { OrdersDashboardPage };
