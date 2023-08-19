import React from 'react';
import Banner from "../../Banner/Banner";
import Basket from "./Basket/Basket";
import "./BasketPage.scss";

const BasketPage = () => {
  return (
    <>
      <Basket/>
      <Banner className="basket-page basket-page__banner"/>
    </>
  );
};

export default BasketPage;
