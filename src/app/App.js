import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { Header, Footer } from '../shared/ui/Layout';
import { ButtonScrollUp, ScrollToTop } from '../shared/ui/ButtonScrollUp';
import Routing from '../pages';
import { accountModel } from '../entities/account';
import OrderPopup from '../components/PopupsRedux/OrderPopup/OrderPopup';
import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';

import './App.scss';

// Компонент app
function App() {
  const dispatch = useDispatch();
  const { user, isFetched } = accountModel.useAccount();
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);

  // Получение данных пользователя если он авторизовался
  useEffect(() => {
    if (isLoggedIn && auth_token && !isFetched) {
      dispatch(accountModel.getUser(auth_token));
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
      <ScrollToTop />
    </div>
  );
}

export default App;
