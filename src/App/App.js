import './App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../Pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountPage from '../Pages/AccountPage/AccountPage';
import AccountSellerProductAdd from '../Pages/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd';
import React from 'react';
import AccountBuyerOrders from '../Pages/AccountPage/AccountBuyerOrders/AccountBuyerOrders';
import AccountBuyerProfile from '../Pages/AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import AccountSellerProfile from '../Pages/AccountPage/AccountSellerProfile/AccountSellerProfile';
import BasketPage from '../Pages/BasketPage/BasketPage';
import AccountBuyerOrderList from '../components/Account/AccountBuyerOrdersList/AccountBuyerOrderList';
import ProductPage from '../Pages/ProductPage/ProductPage';
import { PRODUCTS } from '../utils/productCardExample';
import ButtonScrollUp from '../components/ButtonScrollUp/ButtonScrollUp';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/basket" element={<BasketPage />} exact />
        <Route path="/product/*" element={<ProductPage product={PRODUCTS[0]} />} exact />
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
      </Routes>
      <ButtonScrollUp />
      <Footer />
    </div>
  );
}

export default App;