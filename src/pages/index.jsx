import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import { Logout } from '../features/app/Logout';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import Favorites from '../components/Favorites/Favorites';

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
import AccountProfile from './AccountPage/AccountProfile/AccountProfile';
import AccountPaymentInfo from './AccountPage/AccountPaymentInfo/AccountPaymentInfo';
import AccountFavorites from './AccountPage/AccountFavorites/AccountFavorites';
import { AccountPage, OrderDetailsPage, OrdersDashboardPage, OrdersListPage } from './AccountPage';

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
          <Route path="profile" element={<AccountProfile />} exact />
          <Route path="product/add" element={<AccountSellerProductAdd />} exact />
          <Route path="payment" element={<AccountPaymentInfo />} exact />
          <Route path="favorites" element={<AccountFavorites />} exact>
            <Route index element={<Favorites />} exact />
            <Route path=":filter" element={<Favorites />} />
            <Route path=":filter/:page" element={<Favorites />} />
          </Route>
          {/*Список Заказов*/}
          <Route path="orders" element={<OrdersListPage />}>
            <Route index path="filter?/page?" element={<OrdersDashboardPage />} />
            <Route path=":id" element={<OrderDetailsPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} exact />
      <Route path="/portal-rules" element={<PortalRulesPage />} exact />
      <Route path="/question-page" element={<QuestionPage />} exact />
      <Route path="/question-form" element={<QuestionForm />} exact />
      <Route path="/about-us" element={<AboutUsPage />} exact />
      <Route path="/activate/:uid/:token" element={<EmailConfirmation />} exact />
      <Route path="/logout" element={<Logout />} exact />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
