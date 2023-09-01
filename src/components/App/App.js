import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from "../Page/HomePage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import AccountPage from "../Page/AccountPage/AccountPage";
import AccountSellerProductAdd from "../Page/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd";
import React from "react";
import AccountBuyerOrders from "../Page/AccountPage/AccountBuyerOrders/AccountBuyerOrders";
import AccountBuyerProfile from '../Page/AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import BasketPage from "../Page/BasketPage/BasketPage";
import AccountBuyerOrderList from "../Account/AccountBuyerOrdersList/AccountBuyerOrderList";
import ProductPage from "../Page/ProductPage/ProductPage";
import { PRODUCTS } from '../../utils/productCardExample';

function App() {


  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/basket" element={<BasketPage/>} exact/>
        <Route path="/product/*" element={<ProductPage product={PRODUCTS[ 0 ]}/>} exact/>
        <Route path="/account" element={<AccountPage/>}>
          <Route index path="profile" element={<AccountBuyerProfile/>} exact/>
          <Route path="product/add" element={<AccountSellerProductAdd/>} exact/>
          <Route path="orders" element={<AccountBuyerOrders/>} exact>
            <Route index element={<AccountBuyerOrderList/>} exact/>
            <Route path=":filter" element={<AccountBuyerOrderList/>}/>
            <Route path=":filter/:page" element={<AccountBuyerOrderList/>}/>
          </Route>
          <Route index element={<Navigate to="profile"/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
