import './ProductPage.scss';
import ProductBlock from '../../components/ProductElements/ProductBlock/ProductBlock';
import PlatformBenefits from '../../components/PlatformBenefits/PlatformBenefits';
import ProductCardContainer from '../../components/ProductElements/ProductCardContainer/ProductCardContainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../components/UI/Preloader/Preloader';
import { fetchProductById } from '../../store/slices/productsSlice';
import NotFound from '../../components/NotFound/NotFound';

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productById, allProducts } = useSelector((state) => state.products);
  const isProductByIdLoaded = productById.status === 'loaded';
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);


  useEffect(() => {
    setSellerProducts(allProducts.allProducts);
  }, [allProducts.allProducts]);


  return (
    <div className="product-page">
      {isProductByIdLoaded
        ? productById.product === undefined
          ? (<NotFound />)
          : (<ProductBlock
            product={productById.product}
            className="product-page__product-block"
          />)
        : (<Preloader />)
      }
      <PlatformBenefits className="product-page__platform-benefits" />
      <ProductCardContainer title={'Товары от этого поставщика'} products={sellerProducts} />
    </div>
  );
}
