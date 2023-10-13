// Глобальные импорты
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { getUser } from '../shared/store/slices/accountSlice';

// Локальные импорты из проекта
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../page/HomePage/HomePage';
import AccountPage from '../page/AccountPage/AccountPage';
import AccountSellerProductAdd from '../page/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd';
import AccountBuyerOrders from '../page/AccountPage/AccountBuyerOrders/AccountBuyerOrders';
import AccountBuyerProfile from '../page/AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import BasketPage from '../page/BasketPage/BasketPage';
import AccountBuyerOrderList from '../components/Account/AccountBuyerOrdersList/AccountBuyerOrderList';
import ProductPage from '../page/ProductPage/ProductPage';
import ButtonScrollUp from '../components/UI/ButtonScrollUp/ButtonScrollUp';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import OrderFormPage from '../page/OrderFormPage/OrderFormPage';
import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';
import AboutUsPage from '../page/SupportServicePage/AboutUsPage/AboutUsPage';
import PrivacyPolicyPage from '../page/SupportServicePage/PrivacyPolicyPage/PrivacyPolicyPage';
import PortalRulesPage from '../page/SupportServicePage/PortalRulesPage/PortalRulesPage';
import QuestionPage from '../page/SupportServicePage/QuestionPage/QuestionPage';
import QuestionForm from '../page/SupportServicePage/QuestionForm/QuestionForm';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import Logout from '../components/Logout/Logout';
import EmailConfirmation from '../page/EmailConfirmation/EmailConfirmation';
import OrderPopup from '../components/PopupsRedux/OrderPopup/OrderPopup';
import AccountPaymentInfo from '../components/UI/Account/AccountPaymentInfo/AccountPaymentInfo';

// Локальные импорты для CSS и ассетов
import './App.scss';

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
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/product/:id" element={<ProductPage/>} exact/>
        <Route path="/basket" element={<BasketPage/>} exact/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/order" element={<OrderFormPage/>} exact/>
          <Route path="/account" element={<AccountPage/>}>
            <Route index path="profile" element={<AccountBuyerProfile/>} exact/>
            <Route path="product/add" element={<AccountSellerProductAdd/>} exact/>
            <Route path="orders" element={<AccountBuyerOrders/>} exact>
              <Route index element={<AccountBuyerOrderList/>} exact/>
              <Route path=":filter" element={<AccountBuyerOrderList/>}/>
              <Route path=":filter/:page" element={<AccountBuyerOrderList/>}/>
            </Route>
            <Route index element={<Navigate to="profile"/>}/>
            <Route path="payment-methods" element={<AccountPaymentInfo/>} exact/>
          </Route>
        </Route>
        <Route path="payment-methods" element={<AccountPaymentInfo/>} exact/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} exact/>
        <Route path="/portal-rules" element={<PortalRulesPage/>} exact/>
        <Route path="/question-page" element={<QuestionPage/>} exact/>
        <Route path="/question-form" element={<QuestionForm/>} exact/>
        <Route path="/about-us" element={<AboutUsPage/>} exact/>
        <Route path="/activate/:uid/:token" element={<EmailConfirmation/>} exact/>
        <Route path="/logout" element={<Logout/>} exact/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <ButtonScrollUp/>
      <Footer/>
      <AuthPopup/>
      <OrderPopup/>
    </div>
  );
}

export default App;
