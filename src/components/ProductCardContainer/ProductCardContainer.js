import ProductCard from '../ProductCard/ProductCard';
import './ProductCardContainer.scss';
import IconFilter from './../Icon/Icon_filter';
import { PRODUCT_CARD } from '../../utils/productCardExample';

export default function ProductCardContainer() {
  return (
    <div className="container">
      <div className="container__top">
        <h3 className="container__title">Новые товары</h3>
        <IconFilter />
      </div>
      <div className="container__cards">
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
        <ProductCard product={PRODUCT_CARD} />
      </div>
      
    </div>
  );
}
