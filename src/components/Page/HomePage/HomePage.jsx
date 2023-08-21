import React from 'react';
import './HomePage.scss';
import PlatformBenefits from "../../PlatformBenefits/PlatformBenefits";
import ProductCardContainer from "../../ProductCardContainer/ProductCardContainer";
import { PRODUCTS } from "../../../utils/productCardExample.js";
import Banner from "../../Banner/Banner";
import PromoRegistration from "../../PromoRegistration/PromoRegistration";
import Promo from "../../Promo/Promo";

const HomePage = () => {
  return (
    <main className="home-page">
      <Promo/>
      <PlatformBenefits className="home-page__platform-benefits"/>
      <ProductCardContainer title="Новые товары" products={PRODUCTS} className="home-page__cards-container"/>
      <Banner className="home-page__banner"/>
      <ProductCardContainer title="Новые товары" products={PRODUCTS} className="home-page__cards-container"/>
      <PromoRegistration className="home-page__promo-registration"/>
    </main>
  );
};

export default HomePage;
