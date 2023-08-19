import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from "../Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AccountPage from "../Page/AccountPage/AccountPage";
import AccountBuyerCompany from "../Page/AccountPage/AccountBuyerCompany/AccountBuyerCompany";
import AccountSellerProductAdd from "../Page/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd";
import React from "react";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/account" element={<AccountPage/>}>
          <Route path="profile" element={<AccountBuyerCompany/>}/>
          <Route path="add" element={<AccountSellerProductAdd/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
