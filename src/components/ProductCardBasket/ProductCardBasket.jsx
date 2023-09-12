import React from 'react';
import './ProductCardBasket.scss';
import Checkbox from '../UI/Checkbox/Checkbox';
import IconTrash from '../UI/Icon/Icon_trash';
import VendorCode from '../UI/VendorCode/VendorCode';
import imageStub from '../../images/basket/Stub_132_128.jpg';
import IconHearth from '../UI/Icon/Icon_hearth';
import Counter from '../UI/Counter/Counter';
import ProductCharacteristicsList from '../ProductCharacteristic/ProductCharacteristic';
import { useDispatch } from 'react-redux';
import { changeQuantity, deleteProduct } from '../../store/slices/basketSlice.js';

/**
 * Компонент ProductCardBasket для отображения товара.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {object} product - Информация о продукте.
 * @param {function} onClickCheckbox - Функция обратного вызова при клике на чекбокс.
 * @param {boolean} isCheckboxChecked - Состояние выбора чекбокса.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента CheckboxItem.
 * @constructor
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const ProductCardBasket = ({ className, product, onClickCheckbox, isCheckboxChecked }) => {
  const dispatch = useDispatch();
  const imageSrc = product.images[0] ? product.images[0].image : imageStub;
  //Форматируем цену из 40000 в 40 000, добавляем разделители разрядов
  const productInfoPrice = new Intl.NumberFormat('ru-RU').format(
    parseFloat(product.price * product.quantity)
  );
  const productInfoPricePerOne = new Intl.NumberFormat('ru-RU').format(parseFloat(product.price));
  return (
    <div className={`product-card-basket ${className ? className : ''}`}>
      <div className="product-card-basket__content">
        <div className="product-card-basket__checkbox">
          <Checkbox onCheckboxClick={onClickCheckbox} isChecked={isCheckboxChecked} />
        </div>
        <div className="product-card-basket__image-with-vendor-code">
          <img className="product-card-basket__image" src={imageSrc} alt="Заглушка" />
          <VendorCode vendorCode="1234567" />
        </div>
        <div className="product-card-basket__details">
          <div className="product-card-basket__details-header">
            <h3 className="product-card-basket__product-title">{product.name}</h3>
            <h4 className="product-card-basket__product-company">{product.seller.name}</h4>
          </div>
          {/*<div className="product-card-basket__characteristics">*/}
          {/*  <ProductCharacteristicsList characteristics={productInfo.characteristic}/>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="product-card-basket__price-count-like">
        <div className="product-card-basket__product-count">
          <Counter
            onChangeQuantity={(productQuantity) =>
              dispatch(changeQuantity({ productIds: product.id, quantity: productQuantity }))
            }
            initCount={product.quantity}
          />
        </div>
        <div className="product-card-basket__product-prices">
          <span className="product-card-basket__product-price">{productInfoPrice} ₽</span>
          <span className="product-card-basket__product-price-per-one">
            за ед. {productInfoPricePerOne} ₽
          </span>
        </div>
        <div className="product-card-basket__buttons">
          <button
            onClick={() => {
              dispatch(deleteProduct({ productIds: product.id }));
            }}
            type="button"
            className="product-card-basket__button"
          >
            <IconTrash className="product-card-basket__icon-button" />
          </button>
          <button type="button" className="product-card-basket__button">
            <IconHearth className="product-card-basket__icon-button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBasket;
