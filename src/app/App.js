// Глобальные импорты
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

// Локальные импорты из проекта
import { ButtonScrollUp, ScrollToTop } from '../shared/ui/ButtonScrollUp';
import Routing from '../pages';
import OrdersList from '../entities/orders/ui/OrdersList/OrdersList';
import OrderPopup from '../components/PopupsRedux/OrderPopup/OrderPopup';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';

import { getUser } from './store/slices/accountSlice';

import './App.scss';


// Компонент app
function App() {
  const dispatch = useDispatch();
  const { user, isFetched } = useSelector((state) => state.account);
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);

  // Эффект, который вызывает getUser, если пользователь авторизован
  useEffect(() => {
    if (isLoggedIn && auth_token && !isFetched) {
      dispatch(getUser(auth_token));
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
