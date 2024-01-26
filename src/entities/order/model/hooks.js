import { useInfiniteQuery, useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import * as AppApi from '../../../shared/api/AppApi';

/**
 * Хук для получения списка заказов.
 *
 */
const useGetOrderList = () => {
  const { auth_token: authToken } = useSelector((state) => state.auth);
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
    try {
      const response = await AppApi.orders.getOrders(authToken, pageParam);

      return {
        nextPage: response.next,
        orders: response.results,
      };
    } catch (error) {
      throw new Error('Failed to fetch orders List: ' + error.message);
    }
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

/**
 * Хук для получения информации о заказе
 *
 * @param {number} orderId - Номер заказа
 * @returns {{isLoading: boolean, isError: boolean, data: *, companyName: *, error: unknown, productList: *, isSuccess: boolean}}
 */
const useGetOrder = (orderId) => {
  const { auth_token: authToken } = useSelector((state) => state.auth);

  const fetchOrder = async (authToken, orderId) => {
    if (isNaN(orderId)) {
      throw new Error('Order ID should be a number');
    }
    try {
      return await AppApi.orders.getOrder(authToken, orderId);
    } catch (error) {
      throw new Error('Failed to fetch order: ' + error.message);
    }
  };

  const getProductList = (data) => {
    return data?.order_products.flatMap((page) => page) ?? [];
  };

  const getCompanyName = (data) => {
    return data?.order_products[0].product.supplier.name || '';
  };

  const { data, isError, isSuccess, isLoading, error } = useQuery(
    ['order', authToken, orderId],
    () => fetchOrder(authToken, orderId),
    {
      retry: false,
      retryDelay: false,
      //enabled: !!orderId,
    }
  );

  const productList = getProductList(data);
  const companyName = getCompanyName(data);
  return { data, isError, isSuccess, isLoading, error, productList, companyName };
};

export { useGetOrderList, useGetOrder };
