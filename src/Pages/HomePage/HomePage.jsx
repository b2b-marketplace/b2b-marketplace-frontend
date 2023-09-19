import React, { useState } from 'react';
import './HomePage.scss';
import PlatformBenefits from '../../components/PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../components/ProductElements/ProductCardContainer/ProductCardContainer';
import BannerAdvertising from '../../components/BannerAdvertising/BannerAdvertising';
import PromoRegistration from '../../components/PromoRegistration/PromoRegistration';
import SliderPromoBanner from '../../components/SliderPromoBanner/SliderPromoBanner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/slices/productsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const products = useSelector((state) => state.products.allProducts.allProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  useEffect(() => {
    setNewProducts(products);
    setPopularProducts(products);
  }, [products]);


  return (
    <main className="home-page">
      <SliderPromoBanner />
      <PlatformBenefits className="home-page__platform-benefits" />
      <ProductCardContainer
        title="Новые товары"
        products={newProducts}
        className="home-page__cards-container"
      />
      <BannerAdvertising className="home-page__banner" />
      <ProductCardContainer
        title="Популярные товары"
        products={popularProducts}
        className="home-page__cards-container"
      />
      <PromoRegistration className="home-page__promo-registration" />
    </main>
  );
};

export default HomePage;
