import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import { Logout } from '../features/app/Logout';

import {
  AccountPage,
  OrderDetailsPage,
  OrdersDashboardPage,
  OrderListPage,
  FavoriteListPage,
} from './AccountPages';
import AccountPaymentInfo from './AccountPages/AccountPaymentInfo/AccountPaymentInfo';
import AccountProfile from './AccountPages/AccountProfile/AccountProfile';
import AccountSellerProductAdd from './AccountPages/AccountSellerProductAdd/AccountSellerProductAdd';
import BasketPage from './BasketPage/BasketPage';
import EmailConfirmation from './EmailConfirmation/EmailConfirmation';
import ErrorPage from './ErrorPage/ErrorPage';
import HomePage from './HomePage/HomePage';
import OrderFormPage from './OrderFormPage/OrderFormPage';
import ProductPage from './ProductPage/ProductPage';
import AboutUsPage from './SupportServicePage/AboutUsPage/AboutUsPage';
import PortalRulesPage from './SupportServicePage/PortalRulesPage/PortalRulesPage';
import PrivacyPolicyPage from './SupportServicePage/PrivacyPolicyPage/PrivacyPolicyPage';
import QuestionForm from './SupportServicePage/QuestionForm/QuestionForm';
import QuestionPage from './SupportServicePage/QuestionPage/QuestionPage';

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
          {/*Список Избранного*/}
          <Route path="favorites" element={<FavoriteListPage />} />
          {/*Список Заказов*/}
          <Route path="orders" element={<OrderListPage />}>
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
