import React from 'react';
import './HomePage.scss';
import PlatformBenefits from '../../components/PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../components/ProductCardContainer/ProductCardContainer';
import { PRODUCTS } from '../../utils/productCardExample.js';
import BannerAdvertising from '../../components/BannerAdvertising/BannerAdvertising';
import PromoRegistration from '../../components/PromoRegistration/PromoRegistration';
import SliderPromoBanner from '../../components/SliderPromoBanner/SliderPromoBanner';

const HomePage = ({ onAuth }) => {
  return (
    <main className="home-page">
      <SliderPromoBanner />
      <PlatformBenefits className="home-page__platform-benefits" />
      <ProductCardContainer
        title="Новые товары"
        products={PRODUCTS}
        className="home-page__cards-container"
      />
      <BannerAdvertising className="home-page__banner" />
      <ProductCardContainer
        title="Популярные товары"
        products={PRODUCTS}
        className="home-page__cards-container"
      />
      <PromoRegistration onAuth={onAuth} className="home-page__promo-registration" />
    </main>
  );
};

export default HomePage;
