import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';
import OrderPopup from '../components/PopupsRedux/OrderPopup/OrderPopup';
import { userModel } from '../entities/user';
import { ScrollUpButton } from '../features/app/Button';
import Routing from '../pages';
import { Header, Footer } from '../shared/ui/Layout';

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
      <ScrollUpButton />
      <Footer />
      <AuthPopup />
      <OrderPopup />
    </div>
  );
}

export default App;
