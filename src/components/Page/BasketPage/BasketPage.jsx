import React from 'react';
import Banner from "../../Banner/Banner";
import Basket from "./Basket/Basket";
import "./BasketPage.scss";

const BasketPage = () => {
  return (
    <main className="basket-page">
      <Basket/>
      <Banner className="basket-page__banner"/>
    </main>
  );
};

export default BasketPage;
