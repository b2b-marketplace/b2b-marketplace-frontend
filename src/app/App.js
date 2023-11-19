import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { Header, Footer } from '../shared/ui/Layout';
import Routing from '../pages';
import { ButtonScrollUp } from '../features/app/Button';
import { userModel } from '../entities/user';
import OrderPopup from '../components/PopupsRedux/OrderPopup/OrderPopup';
import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';

import './App.scss';

// Компонент app
function App() {
  const dispatch = useDispatch();
  const { user, isFetched } = userModel.useGetUser();
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);

  // Получение данных пользователя если он авторизовался
  useEffect(() => {
    if (isLoggedIn && auth_token && !isFetched) {
      dispatch(userModel.getUser(auth_token));
    }
  }, [isFetched, isLoggedIn]);

  return (
    <div className="app">
      <Header />
      <Routing />
      <ButtonScrollUp />
      <Footer />
      <AuthPopup />
      <OrderPopup />
    </div>
  );
}

export default App;
