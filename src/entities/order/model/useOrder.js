import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

import * as AppApi from '../../../shared/api/AppApi';

/**
 * Хук для получения списка заказов.
 *
 * @param {string} authToken - Токен аутентификации пользователя.
 * @returns {UseInfiniteQueryResult<{ nextPage: string | null, orders: any[] }, unknown>} - Результат запроса на получение списка заказов.
 */
const useGetOrderList = (authToken) => {
  /**
   * Получение параметра следующей страницы.
   *
   * @param {Object} lastPage - Последняя полученная страница.
   * @returns {string | false} - Параметр следующей страницы или false, если такой параметр отсутствует.
   */
  const getNextPageParam = (lastPage) => {
    if (lastPage.nextPage) {
      const url = new URL(lastPage.nextPage);
      return url.searchParams.get('page');
    }
    return false;
  };

  /**
   * Функция для загрузки списка заказов.
   *
   * @param {Object} params - Параметры запроса (номер страницы).
   * @param {number} params.pageParam - Номер страницы, которую необходимо загрузить.
   * @returns {Promise<{ nextPage: string | null, orders: any[] }>} - Объект с информацией о следующей странице и списком заказов.
   */
  const fetchOrders = async ({ pageParam }) => {
    const response = await AppApi.orders.getOrders(authToken, pageParam);
    return {
      nextPage: response.next,
      orders: response.results,
    };
  };

  /**
   * Получение всех страниц заказов из полученных данных.
   *
   * @param {Object | undefined} data - Данные, полученные после выполнения запроса.
   * @returns {any[]} - Массив заказов со всех полученных страниц или пустой массив, если данных нет.
   */
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
