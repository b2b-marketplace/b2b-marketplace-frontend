import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductBlock from '../../components/ProductElements/ProductBlock/ProductBlock';
import ProductCardContainer from '../../components/ProductElements/ProductCardContainer/ProductCardContainer';
import { productModel } from '../../entities/product';
import { Preloader } from '../../shared/ui/Preloader';
import ErrorPage from '../ErrorPage/ErrorPage';

import './ProductPage.scss';

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productById, allProducts } = useSelector((state) => state.products);
  const isProductByIdLoaded = productById.status === 'loaded';
  const [sellerProducts, setSellerProducts] = useState([]);

  const { pageDB, isFull } = allProducts;

  useEffect(() => {
    dispatch(productModel.fetchProductById({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(productModel.fetchProducts({ pageDB }));
  }, [dispatch, pageDB]);

  useEffect(() => {
    setSellerProducts(allProducts.allProducts);
  }, [allProducts.allProducts]);

  const handleClickMore = () => {
    dispatch(productModel.loadMoreProducts());
  };

  return (
    <div className="product-page">
      {isProductByIdLoaded ? (
        productById.product === undefined ? (
          <ErrorPage />
        ) : (
          <ProductBlock product={productById.product} className="product-page__product-block" />
        )
      ) : (
        <Preloader />
      )}

      <ProductCardContainer
        title="Товары от этого поставщика"
        products={sellerProducts}
        onClickMoreBtn={handleClickMore}
        isFull={isFull}
      />
    </div>
  );
}
