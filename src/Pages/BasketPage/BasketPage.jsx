import React from 'react';
import BannerAdvertising from '../../components/BannerAdvertising/BannerAdvertising';
import Basket from './Basket/Basket';
import './BasketPage.scss';

const BasketPage = () => {
  return (
    <main className="basket-page">
      <Basket className="basket-page__basket" />
      <BannerAdvertising className="basket-page__banner" />
    </main>
  );
};

export default BasketPage;
