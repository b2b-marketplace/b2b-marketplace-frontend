import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import AccountPaymentInfo from '../components/UI/Account/AccountPaymentInfo/AccountPaymentInfo';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import Logout from '../components/Logout/Logout';
import OrdersList from '../components/Account/OrdersList/OrdersList';

import QuestionPage from './SupportServicePage/QuestionPage/QuestionPage';
import QuestionForm from './SupportServicePage/QuestionForm/QuestionForm';
import PrivacyPolicyPage from './SupportServicePage/PrivacyPolicyPage/PrivacyPolicyPage';
import PortalRulesPage from './SupportServicePage/PortalRulesPage/PortalRulesPage';
import AboutUsPage from './SupportServicePage/AboutUsPage/AboutUsPage';
import ProductPage from './ProductPage/ProductPage';
import OrderFormPage from './OrderFormPage/OrderFormPage';
import HomePage from './HomePage/HomePage';
import ErrorPage from './ErrorPage/ErrorPage';
import EmailConfirmation from './EmailConfirmation/EmailConfirmation';
import BasketPage from './BasketPage/BasketPage';
import AccountSellerProductAdd from './AccountPage/AccountSellerProductAdd/AccountSellerProductAdd';
import AccountFavorites from './AccountPage/AccountFavorites/AccountFavorites';
import AccountBuyerProfile from './AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import { AccountPage, OrdersListPage } from './AccountPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/product/:id" element={<ProductPage />} exact />
      <Route path="/basket" element={<BasketPage />} exact />
      <Route element={<ProtectedRoutes />}>
        <Route path="/order" element={<OrderFormPage />} exact />
        <Route path="/account" element={<AccountPage />} exact>
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<AccountBuyerProfile />} exact />
          <Route path="product/add" element={<AccountSellerProductAdd />} exact />
          <Route path="/account/payment" element={<AccountPaymentInfo />} exact />
          <Route path="/account/favorites" element={<AccountFavorites />} exact />
          <Route path="orders-list" element={<OrdersListPage />} exact>
            <Route index element={<OrdersList />} exact />
            <Route path=":filter" element={<OrdersList />} />
            <Route path=":filter/:page" element={<OrdersList />} />
          </Route>
          <Route path="payment-methods" element={<AccountPaymentInfo />} exact />
        </Route>
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} exact />
      <Route path="/portal-rules" element={<PortalRulesPage />} exact />
      <Route path="/question-page" element={<QuestionPage />} exact />
      <Route path="/question-form" element={<QuestionForm />} exact />
      <Route path="/about-us" element={<AboutUsPage />} exact />
      <Route path="/activate/:uid/:token" element={<EmailConfirmation />} exact />
      <Route path="/logout" element={<Logout />} exact />
      <Route path="*" element={<ErrorPage />} />>
    </Routes>
  );
};

export default Routing;
