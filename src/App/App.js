import './App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../Pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountPage from '../Pages/AccountPage/AccountPage';
import AccountSellerProductAdd from '../Pages/AccountPage/AccountSellerProductAdd/AccountSellerProductAdd';
import React, { useState } from "react";
import AccountBuyerOrders from '../Pages/AccountPage/AccountBuyerOrders/AccountBuyerOrders';
import AccountBuyerProfile from '../Pages/AccountPage/AccountBuyerProfile/AccountBuyerProfile';
import BasketPage from '../Pages/BasketPage/BasketPage';
import AccountBuyerOrderList from '../components/Account/AccountBuyerOrdersList/AccountBuyerOrderList';
import ProductPage from '../Pages/ProductPage/ProductPage';
import { PRODUCTS } from '../utils/productCardExample';
import ButtonScrollUp from '../components/ButtonScrollUp/ButtonScrollUp';
import SelectPopup from '../components/AuthPopup/SelectPopup/SelectPopup';
import RegisterPopup from '../components/AuthPopup/RegisterPopup/RegisterPopup';
import LoginPopup from '../components/AuthPopup/LoginPopup/LoginPopup';
import CompleteRegistrationPopup from '../components/AuthPopup/CompleteRegistrationPopup/CompleteRegistrationPopup';
import CompleteLoginPopup from '../components/AuthPopup/CompleteLoginPopup/CompleteLoginPopup';
import SelectRestorePopup from '../components/AuthPopup/SelectRestorePopup/SelectRestorePopup';
import RestoreByEmailPopup from '../components/AuthPopup/RestoreByEmailPopup/RestoreByEmailPopup';
import RestoreByPhonePopup from '../components/AuthPopup/RestoreByPhonePopup/RestoreByPhonePopup';
import ConfirmRestoreByPhonePopup from '../components/AuthPopup/ConfirmRestoreByPhonePopup/ConfirmRestoreByPhonePopup';
import ConfirmRestoreByEmailPopup from '../components/AuthPopup/ConfirmRestoreByEmailPopup/ConfirmRestoreByEmailPopup';
import NewPasswordPopup from '../components/AuthPopup/NewPasswordPopup/NewPasswordPopup';

function App() {
  const [isSelectPopupOpen, setIsSelectPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isCompleteRegistrationPopupOpen, setIsCompleteRegistrationPopupOpen] = useState(false);
  const [isCompleteLoginPopupOpen, setIsCompleteLoginPopupOpen] = useState(false);
  const [isRestorePopupOpen, setIsRestorePopupOpen] = useState(false);
  const [isRestoreByPhonePopupOpen, setIsRestoreByPhonePopupOpen] = useState(false);
  const [isRestoreByEmailPopupOpen, setIsRestoreByEmailPopupOpen] = useState(false);
  const [isConfirmRestoreByEmailPopupOpen, setIsConfirmRestoreByEmailPopupOpen] = useState(false);
  const [isConfirmRestoreByPhonePopupOpen, setIsConfirmRestoreByPhonePopupOpen] = useState(false);
  const [isNewPasswordPopupOpen, setIsNewPasswordPopupOpen] = useState(false);

  const handlePopupsOpen = (event) => {
    if (event.target.value === 'register') {
      setIsSelectPopupOpen(false);
      setIsRegisterPopupOpen(true);
    }
    if (event.target.value === 'login') {
      setIsSelectPopupOpen(false);
      setIsLoginPopupOpen(true);
    }
    if (event.target.value === 'select') {
      setIsSelectPopupOpen(true);
    }
    if (event.target.value === 'email') {
      setIsRestorePopupOpen(false);
      setIsRestoreByEmailPopupOpen(true);
    }
    if (event.target.value === 'tel') {
      setIsRestorePopupOpen(false);
      setIsRestoreByPhonePopupOpen(true);
    }

  };

  const handleRestorePopupOpen = () => {
    handlePopupsClose();
    setIsRestorePopupOpen(true);
  };

  const handlePopupsClose = () => {
    setIsSelectPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsCompleteRegistrationPopupOpen(false);
    setIsCompleteLoginPopupOpen(false);
    setIsRestorePopupOpen(false);
    setIsRestoreByEmailPopupOpen(false);
    setIsRestoreByPhonePopupOpen(false);
    setIsConfirmRestoreByEmailPopupOpen(false);
    setIsConfirmRestoreByPhonePopupOpen(false);
    setIsNewPasswordPopupOpen(false);
  };

  const handleRegistration = (formData) => {
    setIsCompleteRegistrationPopupOpen(true);
  };

  const handleLogin = (formData) => {
    setIsCompleteLoginPopupOpen(true);
  };

  const handleRestoreByPhone = (formData) => {
    setIsConfirmRestoreByPhonePopupOpen(true);
  };

  const handleRestoreByEmail = (formData) => {
    setIsConfirmRestoreByEmailPopupOpen(true);
  };

  const handleNewPassword = () => {
    setIsNewPasswordPopupOpen(true);
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage onAuth={handlePopupsOpen} />} exact />
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
      <SelectPopup onSelectType={handlePopupsOpen} onClose={handlePopupsClose} isOpen={isSelectPopupOpen} />
      <RegisterPopup onClose={handlePopupsClose} isOpen={isRegisterPopupOpen} onSubmit={handleRegistration} />
      <LoginPopup onClose={handlePopupsClose} onRestore={handleRestorePopupOpen} isOpen={isLoginPopupOpen} onSubmit={handleLogin} />
      <CompleteRegistrationPopup onClose={handlePopupsClose} isOpen={isCompleteRegistrationPopupOpen} />
      <CompleteLoginPopup onClose={handlePopupsClose} isOpen={isCompleteLoginPopupOpen} />
      <SelectRestorePopup onSelectType={handlePopupsOpen} isOpen={isRestorePopupOpen} onClose={handlePopupsClose} />
      <RestoreByEmailPopup isOpen={isRestoreByEmailPopupOpen} onClose={handlePopupsClose} onSubmit={handleRestoreByEmail} />
      <RestoreByPhonePopup isOpen={isRestoreByPhonePopupOpen} onClose={handlePopupsClose} onSubmit={handleRestoreByPhone} />
      <ConfirmRestoreByPhonePopup isOpen={isConfirmRestoreByPhonePopupOpen} onClose={handlePopupsClose} onSubmit={handleNewPassword} />
      <ConfirmRestoreByEmailPopup isOpen={isConfirmRestoreByEmailPopupOpen} onClose={handlePopupsClose} />
      <NewPasswordPopup isOpen={isNewPasswordPopupOpen} onClose={handlePopupsClose} />
    </div>
  );
}

export default App;
