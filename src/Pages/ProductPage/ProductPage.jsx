import ProductBlock from './ProductBlock/ProductBlock';
import PlatformBenefits from '../../components/PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../components/ProductCardContainer/ProductCardContainer';
import { useEffect, useState } from 'react';
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
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(products.items.find((item) => item.id === Number(id)));
  }, [id, products.items]);

  // const product = products.items.find((item) => item.id === Number(id));
  // console.log(product);
  // const [sellerProducts, setSellerProducts] = useState([]);

  // if (isProductsLoaded)
  //   setSellerProducts(products.items.filter(item => item.seller.id === product.seller.id));

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div className="product-page">
      {isProductsLoaded ?
        product === undefined
          ? (<NotFound />)
          : (<ProductBlock
            product={product}
            className="product-page__product-block"
          />
          ) : (
          <Preloader />
        )}
      <PlatformBenefits className="product-page__platform-benefits" />
      <ProductCardContainer title={'Товары от этого поставщика'} />
    </div>
  );
}
