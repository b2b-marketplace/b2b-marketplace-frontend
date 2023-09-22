import React from 'react';
import BannerAdvertising from '../../components/Banners/BannerAdvertising/BannerAdvertising';
import Basket from '../../components/Basket/Basket';
import './BasketPage.scss';

const BasketPage = () => {
  return (
    <main className="basket-page">
      <Basket extraClassName="basket-page__basket" />
      <BannerAdvertising className="basket-page__banner" />
    </main>
  );
};

export default BasketPage;
