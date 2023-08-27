import React from 'react';
import BannerAdvertising from "../../BannerAdvertising/BannerAdvertising";
import Basket from "./Basket/Basket";
import "./BasketPage.scss";

const BasketPage = () => {
  return (
    <main className="basket-page">
      <Basket/>
      <BannerAdvertising className="basket-page__banner"/>
    </main>
  );
};

export default BasketPage;
