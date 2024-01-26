import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetBasketItem = () => {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBasketItem = async () => {
      setLoading(true);
      try {
        const items = [];
        if (isLoggedIn) {
          // Если пользователь авторизирован, делаем запрос на сервер
          //items = await fetchCartItems(); // Запрос на сервер для получения предметов
        } else {
          // Если пользователь не авторизирован, получаем предметы из локального хранилища
          //const localItems = localStorage.getItem('cartItems');
          //items = localItems ? JSON.parse(localItems) : [];
        }
        // Помещаем предметы в Redux хранилище
        //dispatch({ type: 'SET_CART_ITEMS', payload: items });
      } catch (error) {
        // Обработка ошибок
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    getBasketItem();
  }, [isLoggedIn, dispatch]);
};

export { useGetBasketItem };
