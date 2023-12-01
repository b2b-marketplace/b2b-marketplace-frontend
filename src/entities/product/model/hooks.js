import eslintPluginPrettier from 'eslint-plugin-prettier';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

import * as AppApi from '../../../shared/api/AppApi';

/**
 * Хук для управления списком чекбоксов.
 *
 * @returns {{
 *    isSelectItems: Array, // Массив выбранных элементов
 *    handleClickCheckbox: Function, // Функция обработки клика по чекбоксу
 *    handleClickSelectAll: Function, // Функция обработки клика "Выбрать все"
 *    isSelectAll: boolean // Флаг выбраны ли все элементы
 *  }}
 *  */
const useCheckBoxList = (list) => {
  const [isSelectItems, setIsSelectItems] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  // useEffect(() => {
  //   console.log(isSelectItems);
  //   //setIsSelectItems([]);
  //   // const newSelectItem = list.filter((item) => isSelectItems.includes(item.id));
  //   // const asd = newSelectItem.flatMap((item) => item.id);
  //   // setIsSelectItems((prevSelection) => {
  //   //   //asd.map(() => {});
  //   //   //console.log(prevSelection);
  //   //   return asd;
  //   // });
  //   // console.log(list);
  //   // console.log(asd);
  //   //setIsSelectItems(asd);
  // }, [list]);

  const handleClickCheckbox = (itemId) => {
    setIsSelectItems((prevSelection) => {
      if (prevSelection.includes(itemId)) {
        return prevSelection.filter((id) => id !== itemId);
      } else {
        return [...prevSelection, itemId];
      }
    });
  };

  const handleClickSelectAll = () => {
    if (!isSelectAll) {
      const all = list?.flatMap((product) => product.id) ?? [];
      setIsSelectItems(all);
    } else {
      setIsSelectItems([]);
    }
    setIsSelectAll(!isSelectAll);
  };

  return {
    isSelectItems,
    setIsSelectItems,
    handleClickCheckbox,
    handleClickSelectAll,
    isSelectAll,
  };
};
useCheckBoxList.propTypes = {
  list: PropTypes.array.isRequired,
};

/**
 * Хук для получения списка избранных элементов.
 *
 * @returns {{
 *   data: Object, // Данные из запроса
 *   fetchNextPage: Function, // Функция для загрузки следующей страницы
 *   hasNextPage: boolean, // Флаг наличия следующей страницы
 *   isFetching: boolean, // Флаг загрузки данных
 *   isFetchingNextPage: boolean, // Флаг загрузки следующей страницы
 *   favoritesList: Array // Список избранных элементов
 }}
 */
const useGetFavoritesList = () => {
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
   * Функция для загрузки списка избранного.
   *
   * @param {Object} params - Параметры запроса (номер страницы).
   * @param {number} params.pageParam - Номер страницы, которую необходимо загрузить.
   * @returns {Promise<{ nextPage: string | null, orders: any[] }>} - Объект с информацией о следующей странице и списком избранного.
   */
  const fetchFavorites = async ({ pageParam }) => {
    try {
      const response = await AppApi.products.getFavoritesProducts(authToken, pageParam);

      return {
        nextPage: response.next,
        favorites: response.results,
      };
    } catch (error) {
      throw new Error('Failed to fetch orders List: ' + error.message);
    }
  };

  /**
   * Получение всех страниц избранного из полученных данных.
   *
   * @param {Object | undefined} data - Данные, полученные после выполнения запроса.
   * @returns {any[]} - Массив заказов со всех полученных страниц или пустой массив, если данных нет.
   */
  const getFavoritesList = (data) => {
    return data?.pages.flatMap((page) => page.favorites) ?? [];
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
    ['favorites'],
    fetchFavorites,
    {
      getNextPageParam,
      // retryDelay: false,
      refetchOnWindowFocus: false,
    }
  );

  const favoritesList = getFavoritesList(data);

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    favoritesList,
  };
};

export { useGetFavoritesList, useCheckBoxList };
