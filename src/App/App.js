import './App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../Pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountPage from '../Pages/AccountPage/AccountPage';
import AccountSellerProductAdd from '../Pages/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd';
import AccountBuyerOrders from '../Pages/AccountPage/AccountBuyerOrders/AccountBuyerOrders';
import AccountBuyerProfile from '../Pages/AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import AccountSellerProfile from '../Pages/AccountPage/AccountSellerProfile/AccountSellerProfile';
import BasketPage from '../Pages/BasketPage/BasketPage';
import AccountBuyerOrderList from '../components/Account/AccountBuyerOrdersList/AccountBuyerOrderList';
import ProductPage from '../Pages/ProductPage/ProductPage';
import ButtonScrollUp from '../components/UI/ButtonScrollUp/ButtonScrollUp';
import NotFound from '../components/NotFound/NotFound';
import OrderFormPage from '../Pages/OrderFormPage/OrderFormPage';
import AuthPopup from '../components/AuthPopup/AuthButtons/AuthPopup';
import AboutUsPage from '../Pages/SupportServicePage/AboutUsPage/AboutUsPage';
import PrivacyPolicyPage from '../Pages/SupportServicePage/PrivacyPolicyPage/PrivacyPolicyPage';
import PortalRulesPage from '../Pages/SupportServicePage/PortalRulesPage/PortalRulesPage';
import QuestionPage from '../Pages/SupportServicePage/QuestionPage/QuestionPage';
import QuestionForm from '../Pages/SupportServicePage/QuestionForm/QuestionForm';
import Activation from '../Pages/Activation/Activation';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <div className="app">
      <Header />
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
          </Route>
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} exact />
        <Route path="/portal-rules" element={<PortalRulesPage />} exact />
        <Route path="/question-page" element={<QuestionPage />} exact />
        <Route path="/question-form" element={<QuestionForm />} exact />
        <Route path="/about-us" element={<AboutUsPage />} exact />
        <Route path="/activate/*" element={<Activation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ButtonScrollUp />
      <Footer />
      <AuthPopup />
    </div>
  );
}

export default App;
