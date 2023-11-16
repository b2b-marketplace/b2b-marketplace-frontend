import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import VendorCode from '../VendorCode/VendorCode';
import { Button } from '../../UI/Button/Button';
import Checkbox from '../../../shared/ui/Checkbox/Checkbox';
import { AppImage } from '../../../shared/ui/AppImage';
import { priceFormat } from '../../../shared/lib/utils';
import { addProduct, deleteProduct } from '../../../app/store/slices/favoritesSlice';

import imageStub from '../../../images/basket/Stub_132_128.jpg';

import './ProductCardFavorites.scss';

const ProductCardFavorites = ({ className, product, onClickCheckbox, isCheckboxChecked, type }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isProductSelect, setIsProductSelect] = useState(false);
  const basketList = useSelector((state) => state.basket.basket);
  const [productInfo, setProductInfo] = useState({
    imageSrc: '',
    productInfoPrice: 0,
    productInfoPricePerOne: 0,
  });

  useEffect(() => {
    if (
      basketList.basket_products.length &&
      basketList.basket_products.find((item) => item.id === product.id)
    )
      setIsProductSelect(true);
  }, [basketList.basket_products, product.id]);

  useEffect(() => {
    const imageSrc = product.images && product.images[0] ? product.images[0].image : imageStub;

    const productInfoPrice = priceFormat(product.price * product.quantity);
    const productInfoPricePerOne = priceFormat(product.price);
    setProductInfo({
      imageSrc,
      productInfoPrice,
      productInfoPricePerOne,
    });
  }, [product]);

  const initView = () => {
    if (type === 'orderForm') return orderView();
    return basketView();
  };

  const handleSelect = () => {
    isProductSelect
      ? dispatch(deleteProduct({ productIds: product.id }))
      : dispatch(addProduct({ productIds: product.id, quantity: product.wholesale_quantity }));
    setIsProductSelect(!isProductSelect);
  };

  const basketView = () => {
    return (
      <div className={`product-card-favorites ${className || ''}`}>
        <div className="product-card-favorites__checkbox">
          <Checkbox handleChangeCheckbox={onClickCheckbox} checked={isCheckboxChecked} />
        </div>
        <div className="product-card-favorites__container">
          <div className="product-card-favorites__details">
            <div className="product-card-favorites__figcaption">
              <AppImage
                radius="radius-50"
                border
                imageSrc={productInfo.imageSrc}
                imageAlt={product.name}
              />
              <VendorCode vendorCode="1234567" />
            </div>
            <div className="product-card-favorites__product-description">
              <h3 className="product-card-favorites__product-title">{product.name}</h3>
              <h4 className="product-card-favorites__product-company">{product.seller.name}</h4>
            </div>
          </div>
          <div className="product-card-favorites__product-actions">
            <div className="product-card-favorites__product-count">
              от {product.wholesale_quantity} шт
            </div>

            <span className="product-card-favorites__product-price">
              {productInfo.productInfoPrice} ₽
            </span>

            <Button size="xs" primary={false} onClick={handleSelect} pressed={isProductSelect}>
              {isProductSelect ? 'В корзине' : 'В корзину'}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const orderView = () => {
    return (
      <div className={`product-card-favorites ${className || ''}`}>
        <div className="product-card-favorites__container">
          <div className="product-card-favorites__details">
            <div className="product-card-favorites__figcaption">
              <AppImage
                radius="radius-50"
                border
                imageSrc={productInfo.imageSrc}
                imageAlt={product.name}
              />
              <VendorCode vendorCode="1234567" />
            </div>
            <div className="product-card-favorites__product-description ">
              <h3 className="product-card-favorites__product-title">{product.name}</h3>
              <h4 className="product-card-favorites__product-company">{product.seller.name}</h4>
            </div>
          </div>
          <div className="product-card-favorites__product-actions product-card-favorites__product-actions_order-form">
            <div className="product-card-favorites__product-quantity">{product.quantity} шт.</div>
            <div className="product-card-favorites__product-prices">
              <span className="product-card-favorites__product-price">
                {productInfo.productInfoPrice} ₽
              </span>
              <span className="product-card-favorites__product-price-per-one">
                за ед. {productInfo.productInfoPricePerOne} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return initView();
};

export default ProductCardFavorites;
