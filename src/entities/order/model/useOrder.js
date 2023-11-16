import { useInfiniteQuery } from 'react-query';

import * as AppApi from '../../../shared/api/AppApi';

/**
 * Хук для получения списка заказов
 *
 * @param authToken
 * @returns {UseInfiniteQueryResult<{nextPage: *, orders: *}, unknown>}
 */
const useGetOrderList = (authToken) => {
  const getNextPageParam = (lastPage) => {
    if (lastPage.nextPage) {
      const url = new URL(lastPage.nextPage);
      return url.searchParams.get('page');
    }
    return false;
  };

  const fetchOrders = async ({ pageParam }) => {
    const response = await AppApi.orders.getOrders(authToken, pageParam);
    return {
      nextPage: response.next,
      orders: response.results,
    };
  };

  const getOrderPages = (data) => {
    return data?.pages.flatMap((page) => page.orders) ?? [];
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
    ['orders', authToken],
    fetchOrders,
    {
      getNextPageParam,
    }
  );

  const orders = getOrderPages(data);

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    orders,
  };
};

export { useGetOrderList };
