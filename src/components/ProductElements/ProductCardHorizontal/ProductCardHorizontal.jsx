import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { basketModel } from '../../../entities/basket';
import { priceFormat } from '../../../shared/lib/utils';
import { AppImage } from '../../../shared/ui/AppImage';
import { Checkbox } from '../../../shared/ui/Checkbox';
import { Counter } from '../../../shared/ui/Counter';
import { VendorCode } from '../../../shared/ui/VendorCode';
import IconTrash from '../../UI/Icon/Icon_trash';

import imageStub from '../../../images/basket/Stub_132_128.jpg';

import './ProductCardHorizontal.scss';

/**
 * Компонент ProductCardHorizontal для отображения товара.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {object} product - Информация о продукте.
 * @param {function} onClickCheckbox - Функция обратного вызова при клике на чекбокс.
 * @param {boolean} isCheckboxChecked - Состояние выбора чекбокса.
 * @param {string} mode - Тип выводимого View
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента CheckboxItem.
 * @constructor
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const ProductCardHorizontal = ({
  className,
  product,
  onClickCheckbox,
  isCheckboxChecked,
  mode,
}) => {
  const [productInfo, setProductInfo] = useState({
    imageSrc: '',
    productInfoPrice: 0,
    productInfoPricePerOne: 0,
  });
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const imageSrc = product.images && product.images[0] ? product.images[0].image : imageStub;
    if (product.quantity_in_stock < product.quantity) {
      setDisable(true);
    }
    const productInfoPrice = priceFormat(product.price * product.quantity);
    const productInfoPricePerOne = priceFormat(product.price);
    setProductInfo({
      imageSrc,
      productInfoPrice,
      productInfoPricePerOne,
    });
  }, [product]);

  const initView = () => {
    if (mode === 'orderForm') return orderView();
    return basketView();
  };

  const changeProductQuantity = (productId, productQuantity) => {
    dispatch(basketModel.changeQuantity({ productIds: productId, quantity: productQuantity }));
  };

  const basketView = () => {
    return (
      <div className={`product-card-horizontal ${className || ''}`}>
        <div className="product-card-horizontal__checkbox">
          {!disable && (
            <Checkbox disabled={disable} onClick={onClickCheckbox} checked={isCheckboxChecked} />
          )}
        </div>
        <div className="product-card-horizontal__container">
          <div className="product-card-horizontal__details">
            <div className="product-card-horizontal__figcaption">
              <AppImage
                className="product-card-horizontal__image"
                imageSrc={productInfo.imageSrc}
                imageAlt={product.name}
                radius="radius-20"
                border
              />
              <VendorCode vendorCode="1234567" />
            </div>
            <div className="product-card-horizontal__product-description">
              <h3 className="product-card-horizontal__product-title">{product.name}</h3>
              <h4 className="product-card-horizontal__product-company">{product.seller.name}</h4>
            </div>
          </div>
          <div className="product-card-horizontal__product-actions">
            {!disable && (
              <div className="product-card-horizontal__product-count">
                <Counter
                  onChangeQuantity={(productQuantity) =>
                    changeProductQuantity(product.id, productQuantity)
                  }
                  maxValue={product.quantity_in_stock}
                  minValue={product.wholesale_quantity}
                  initCount={product.quantity}
                />
              </div>
            )}

            {!disable && (
              <div className="product-card-horizontal__product-prices">
                <span className="product-card-horizontal__product-price">
                  {productInfo.productInfoPrice} &#8381;
                </span>
                <span className="product-card-horizontal__product-price-per-one">
                  за ед. {productInfo.productInfoPricePerOne} &#8381;
                </span>
              </div>
            )}

            {disable && <div className="product-card-horizontal__sold-out"> Товар Закончился</div>}
            <div className="product-card-horizontal__buttons">
              <button
                onClick={() => {
                  dispatch(basketModel.deleteProduct({ productIds: product.id }));
                }}
                type="button"
                className="product-card-horizontal__button"
              >
                <IconTrash className="product-card-horizontal__icon-button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const orderView = () => {
    return (
      <div className={`product-card-horizontal ${className || ''}`}>
        <div className="product-card-horizontal__container">
          <div className="product-card-horizontal__details">
            <div className="product-card-horizontal__figcaption">
              <AppImage
                className="product-card-horizontal__image"
                radius="radius-50"
                border
                imageSrc={productInfo.imageSrc}
                imageAlt={product.name}
              />
              <VendorCode vendorCode="1234567" />
            </div>
            <div className="product-card-horizontal__product-description ">
              <h3 className="product-card-horizontal__product-title">{product.name}</h3>
              <h4 className="product-card-horizontal__product-company">{product.seller.name}</h4>
            </div>
          </div>
          <div className="product-card-horizontal__product-actions product-card-horizontal__product-actions_order-form">
            <div className="product-card-horizontal__product-quantity">{product.quantity} шт.</div>
            <div className="product-card-horizontal__product-prices">
              <span className="product-card-horizontal__product-price">
                {productInfo.productInfoPrice} &#8381;
              </span>
              <span className="product-card-horizontal__product-price-per-one">
                за ед. {productInfo.productInfoPricePerOne} &#8381;
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return initView();
};

export default ProductCardHorizontal;
