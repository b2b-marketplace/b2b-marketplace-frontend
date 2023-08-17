import React from 'react';
import './Main.scss';
import PlatformBenefits from "../PlatformBenefits/PlatformBenefits";
import ProductCardContainer from "../ProductCardContainer/ProductCardContainer";
import { PRODUCTS } from "../../utils/productCardExample.js";
import Banner from "../Banner/Banner";
import PromoRegistration from "../PromoRegistration/PromoRegistration";

const Main = () => {
  return (
    <div className="main">
      <PlatformBenefits className="main__platform-benefits"/>
      <ProductCardContainer title="Новые товары" products={PRODUCTS} className="main__cards-container"/>
      <Banner className="main__banner"/>
      <ProductCardContainer title="Новые товары" products={PRODUCTS} className="main__cards-container"/>
      <PromoRegistration className="main__promo-registration" />
    </div>
  );
};

export default Main;
