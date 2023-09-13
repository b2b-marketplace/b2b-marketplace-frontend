import ProductBlock from './ProductBlock/ProductBlock';
import PlatformBenefits from '../../components/PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../components/ProductCardContainer/ProductCardContainer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../components/UI/Preloader/Preloader';
import { fetchProducts } from '../../store/slices/productsSlice';
import './ProductPage.scss';
import NotFound from '../../components/NotFound/NotFound';

export default function ProductPage() {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const isProductsLoaded = products.status === 'loaded';

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div className="product-page">
      {isProductsLoaded ?
        products.items.find((item) => item.id === Number(id)) === undefined
          ? (<NotFound />)
          : (<ProductBlock
            product={products.items.find((item) => item.id === Number(id))}
            className="product-page__product-block"
          />
          ) : (
          <Preloader />
          // <NotFound />
        )}
      <PlatformBenefits className="product-page__platform-benefits" />
      <ProductCardContainer title={'Товары от этого поставщика'} />
    </div>
  );
}
