import React from 'react';
import './ProductCardHorizontal.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';
import IconTrash from '../../UI/Icon/Icon_trash';
import imageStub from '../../../images/basket/Stub_132_128.jpg';
import IconHearth from '../../UI/Icon/Icon_hearth';
import Counter from '../../UI/Counter/Counter';
import { useDispatch } from 'react-redux';
import { changeQuantity, deleteProduct } from '../../../store/slices/basketSlice.js';
import ProductCardHorizontalImage from './ProductCardHorizontalImage/ProductCardHorizontalImage';
import VendorCode from '../VendorCode/VendorCode';

/**
 * Компонент ProductCardHorizontal для отображения товара.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {object} product - Информация о продукте.
 * @param {function} onClickCheckbox - Функция обратного вызова при клике на чекбокс.
 * @param {boolean} isCheckboxChecked - Состояние выбора чекбокса.
 * @param {string} type - Тип выводимого View
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента CheckboxItem.
 * @constructor
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const ProductCardHorizontal = ({
  className,
  product,
  onClickCheckbox,
  isCheckboxChecked,
  type,
}) => {
  const dispatch = useDispatch();
  const imageSrc = product.images[0] ? product.images[0].image : imageStub;
  //Форматируем цену из 40000 в 40 000, добавляем разделители разрядов
  const productInfoPrice = new Intl.NumberFormat('ru-RU').format(
    parseFloat(product.price * product.quantity)
  );
  const productInfoPricePerOne = new Intl.NumberFormat('ru-RU').format(parseFloat(product.price));
  const initView = () => {
    if (type === 'orderForm') return orderView();
    else return basketView();
  };
  const basketView = () => {
    return (
      <div className={`product-card-horizontal ${className ? className : ''}`}>
        <div className="product-card-horizontal__content">
          <div className="product-card-horizontal__checkbox">
            <Checkbox handleChangeCheckbox={onClickCheckbox} checked={isCheckboxChecked} />
          </div>
          <div className="product-card-horizontal__vendor-code-which-image">
            <ProductCardHorizontalImage imageSrc={imageSrc} imageAlt={product.name} />
            <VendorCode vendorCode="1234567" />
          </div>
          <div className="product-card-horizontal__details">
            <div className="product-card-horizontal__details-header">
              <h3 className="product-card-horizontal__product-title">{product.name}</h3>
              <h4 className="product-card-horizontal__product-company">{product.seller.name}</h4>
            </div>
          </div>
        </div>
        <div className="product-card-horizontal__price-count-like">
          <div className="product-card-horizontal__product-count">
            <Counter
              onChangeQuantity={(productQuantity) =>
                dispatch(changeQuantity({ productIds: product.id, quantity: productQuantity }))
              }
              initCount={product.quantity}
            />
          </div>
          <div className="product-card-horizontal__product-prices">
            <span className="product-card-horizontal__product-price">{productInfoPrice} ₽</span>
            <span className="product-card-horizontal__product-price-per-one">
              за шт. {productInfoPricePerOne} ₽
            </span>
          </div>
          <div className="product-card-horizontal__buttons">
            <button
              onClick={() => {
                dispatch(deleteProduct({ productIds: product.id }));
              }}
              type="button"
              className="product-card-horizontal__button"
            >
              <IconTrash className="product-card-horizontal__icon-button" />
            </button>
            <button type="button" className="product-card-horizontal__button">
              <IconHearth className="product-card-horizontal__icon-button" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  const orderView = () => {
    return (
      <div className={`product-card-horizontal ${className ? className : ''}`}>
        <div className="product-card-horizontal__content">
          <div className="product-card-horizontal__vendor-code-which-image">
            <ProductCardHorizontalImage imageSrc={imageSrc} imageAlt={product.name} />
            <VendorCode vendorCode="1234567" />
          </div>
          <div className="product-card-horizontal__details">
            <div className="product-card-horizontal__details-header">
              <h3 className="product-card-horizontal__product-title">{product.name}</h3>
              <h4 className="product-card-horizontal__product-company">{product.seller.name}</h4>
            </div>
          </div>
        </div>

        <div className="product-card-horizontal__price-quantity">
          <div className="product-card-horizontal__product-quantity">{product.quantity} шт.</div>
          <div className="product-card-horizontal__product-prices">
            <span className="product-card-horizontal__product-price">{productInfoPrice} ₽</span>
            <span className="product-card-horizontal__product-price-per-one">
              за шт. {productInfoPricePerOne} ₽
            </span>
          </div>
        </div>
      </div>
    );
  };
  return initView();
};

export default ProductCardHorizontal;
