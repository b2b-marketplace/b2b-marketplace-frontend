// Глобальные импорты
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

// Локальные импорты из проекта
import AccountBuyerOrderList from '../components/Account/AccountBuyerOrdersList/AccountBuyerOrderList';
import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Logout from '../components/Logout/Logout';
import OrderPopup from '../components/PopupsRedux/OrderPopup/OrderPopup';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import AccountPaymentInfo from '../components/UI/Account/AccountPaymentInfo/AccountPaymentInfo';
import ButtonScrollUp from '../components/UI/ButtonScrollUp/ButtonScrollUp';
import AccountBuyerOrders from '../pages/AccountPage/AccountBuyerOrders/AccountBuyerOrders';
import AccountBuyerProfile from '../pages/AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import AccountPage from '../pages/AccountPage/AccountPage';
import AccountSellerProductAdd from '../pages/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd';
import BasketPage from '../pages/BasketPage/BasketPage';
import EmailConfirmation from '../pages/EmailConfirmation/EmailConfirmation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import OrderFormPage from '../pages/OrderFormPage/OrderFormPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import AboutUsPage from '../pages/SupportServicePage/AboutUsPage/AboutUsPage';
import PortalRulesPage from '../pages/SupportServicePage/PortalRulesPage/PortalRulesPage';
import PrivacyPolicyPage from '../pages/SupportServicePage/PrivacyPolicyPage/PrivacyPolicyPage';
import QuestionForm from '../pages/SupportServicePage/QuestionForm/QuestionForm';
import QuestionPage from '../pages/SupportServicePage/QuestionPage/QuestionPage';
import { getUser } from '../shared/store/slices/accountSlice';

import './App.scss';

// Локальные импорты для CSS и ассетов

// Компонент App
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

  // Компонент ScrollToTop для прокрутки страницы наверх при смене маршрута
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };

  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/product/:id" element={<ProductPage />} exact />
        <Route path="/basket" element={<BasketPage />} exact />
        <Route element={<ProtectedRoutes />}>
          <Route path="/order" element={<OrderFormPage />} exact />
          <Route path="/account" element={<AccountPage />}>
            <Route index path="profile" element={<AccountBuyerProfile />} exact />
            <Route path="product/add" element={<AccountSellerProductAdd />} exact />
            <Route path="orders" element={<AccountBuyerOrders />} exact>
              <Route index element={<AccountBuyerOrderList />} exact />
              <Route path=":filter" element={<AccountBuyerOrderList />} />
              <Route path=":filter/:page" element={<AccountBuyerOrderList />} />
            </Route>
            <Route index element={<Navigate to="profile" />} />
            <Route path="payment-methods" element={<AccountPaymentInfo />} exact />
          </Route>
        </Route>
        <Route path="payment-methods" element={<AccountPaymentInfo />} exact />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} exact />
        <Route path="/portal-rules" element={<PortalRulesPage />} exact />
        <Route path="/question-page" element={<QuestionPage />} exact />
        <Route path="/question-form" element={<QuestionForm />} exact />
        <Route path="/about-us" element={<AboutUsPage />} exact />
        <Route path="/activate/:uid/:token" element={<EmailConfirmation />} exact />
        <Route path="/logout" element={<Logout />} exact />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ButtonScrollUp />
      <Footer />
      <AuthPopup />
      <OrderPopup />
    </div>
  );
}

export default App;
