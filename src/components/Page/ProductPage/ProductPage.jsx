import './ProductPage.scss';
import ProductBlock from './ProductBlock/ProductBlock';
import PlatformBenefits from '../../PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../ProductCardContainer/ProductCardContainer';
import { PRODUCTS } from '../../../utils/productCardExample';

export default function ProductPage({ product }) {

  return (
    <div className='product-page'>
      <ProductBlock product={product} className='product-page__product-block' />
      <PlatformBenefits className="product-page__platform-benefits" />
      <ProductCardContainer title={'Товары от этого поставщика'} products={PRODUCTS} />
    </div>
  );
}
