import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import OrdersList from '../entities/orders/ui/OrdersList/OrdersList';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import Logout from '../components/Logout/Logout';
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
import AccountPaymentInfo from './AccountPage/AccountPaymentInfo/AccountPaymentInfo';
import AccountFavorites from './AccountPage/AccountFavorites/AccountFavorites';
import AccountProfile from './AccountPage/AccountBuyerProfile/AccountProfile';
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
          <Route path="profile" element={<AccountProfile />} exact />
          <Route path="product/add" element={<AccountSellerProductAdd />} exact />
          <Route path="payment" element={<AccountPaymentInfo />} exact />
          <Route path="favorites" element={<AccountFavorites />} exact>
            <Route index element={<Favorites />} exact />
            <Route path=":filter" element={<Favorites />} />
            <Route path=":filter/:page" element={<Favorites />} />
          </Route>
          <Route path="orders-list" element={<OrdersListPage />} exact>
            <Route index element={<OrdersList />} exact />
            <Route path=":filter" element={<OrdersList />} />
            <Route path=":filter/:page" element={<OrdersList />} />
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
      <Route path="*" element={<ErrorPage />} />>
    </Routes>
  );
};

export default Routing;
