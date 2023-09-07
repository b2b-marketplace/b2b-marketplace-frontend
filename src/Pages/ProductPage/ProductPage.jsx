import './ProductPage.scss';
import ProductBlock from './ProductBlock/ProductBlock';
import PlatformBenefits from '../../components/PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../components/ProductCardContainer/ProductCardContainer';
import { PRODUCTS } from '../../utils/productCardExample';
import { useEffect, useState } from 'react';

export default function ProductPage({ product }) {

  return (
    <div className='product-page'>
      <ProductBlock product={product} className='product-page__product-block' />
      <PlatformBenefits className="product-page__platform-benefits" />
      <ProductCardContainer title={'Товары от этого поставщика'} />
    </div>
  );
}
