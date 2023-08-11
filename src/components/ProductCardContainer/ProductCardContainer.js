import ProductCard from '../ProductCard/ProductCard';
import './ProductCardContainer.scss';
import IconFilter from './../Icon/Icon_filter';
// import { PRODUCT_CARD } from '../../utils/productCardExample';

export default function ProductCardContainer({ title, products }) {
  return (
    <section className="container">
      <h3 className="container__title">{title}</h3>

      <div className="container__cards">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
}
