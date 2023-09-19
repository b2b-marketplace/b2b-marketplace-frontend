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
  const { productById } = useSelector((state) => state.products);
  const isProductByIdLoaded = productById.status === 'loaded';

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);


  const { allProducts } = useSelector((state) => state.products);
  const isProductsLoaded = allProducts.status === 'loaded';
  // const [product, setProduct] = useState();
  const [sellerProducts, setSellerProducts] = useState([]);

  // console.log(products);
  // useEffect(() => {
  // setProduct(products.items.find((item) => item.id === Number(id)));
  // if (isProductsLoaded)
  //   setSellerProducts(products.item.filter(item => item.seller.id === product.seller.id));
  // }, []);

  // const product = products.items.find((item) => item.id === Number(id));
  // console.log(product);
  // const [sellerProducts, setSellerProducts] = useState([]);

  // if (isProductsLoaded)
  //   setSellerProducts(products.items.filter(item => item.seller.id === product.seller.id));

  // useEffect(() => {
  //   dispatch(fetchProducts);
  // }, [dispatch]);

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
