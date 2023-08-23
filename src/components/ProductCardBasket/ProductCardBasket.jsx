import React from 'react';
import "./ProductCardBasket.scss";
import Checkbox from "../UI/Checkbox/Checkbox";
import IconTrash from "../UI/Icon/Icon_trash";
import VendorCode from "../UI/VendorCode/VendorCode";
import imageStub from "../../images/basket/Stub_132_128.jpg";
import IconHearth from "../UI/Icon/Icon_hearth";
import Counter from "../UI/Counter/Counter";
import ProductCharacteristicsList from "../ProductCharacteristic/ProductCharacteristic";

/**
 * Компонент ProductCardBasket для отображения товара в корзине.
 *
 * @param {string} className - Дополнительные CSS классы для настройки внешнего вида.
 * @param {function} onCheckboxClick - Функция обратного вызова при клике на чекбокс.
 * @param {boolean} isCheckboxChecked - Состояние выбора чекбокса.
 * @param {object} product - Информация о продукте.
 * @param {object} props - Дополнительные пропсы компонента.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента CheckboxItem.
 * @constructor
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const ProductCardBasket = ({ className, onCheckboxClick, isCheckboxChecked, product }) => {
  const productInfo = product.product;

  return (
    <div className={`product-card-basket ${className ? className : ""}`}>
      <div className="product-card-basket__buttons">
        <button type="button" className="product-card-basket__button"><IconTrash className="product-card-basket__icon-button"/></button>
        <button type="button" className="product-card-basket__button"><IconHearth className="product-card-basket__icon-button"/></button>
      </div>
      <div className="product-card-basket__container">
        <div className="product-card-basket__content">
          <div className="product-card-basket__checkbox">
            <Checkbox onClick={onCheckboxClick} isChecked={isCheckboxChecked} id={productInfo.id}/>
          </div>
          <div className="product-card-basket__image-with-vendor-code">
            <img className="product-card-basket__image" src={imageStub} alt="Заглушка"/>
            <VendorCode vendorCode="1234567"/>
          </div>
          <div className="product-card-basket__details">
            <div className="product-card-basket__details-header">
              <h3 className="product-card-basket__product-title">{productInfo.name}</h3>
              <h4 className="product-card-basket__product-company">{productInfo.suppliers[ 0 ].company.company_name}</h4>
            </div>
            <div className="product-card-basket__characteristics">
              <ProductCharacteristicsList characteristics={productInfo.characteristic}/>
            </div>
          </div>
        </div>
        <div className="product-card-basket__price-count">
          <div className="product-card-basket__product-count">
            <Counter initCount={product.quantity}/>
          </div>
          <div className="product-card-basket__product-price">
            {productInfo.price} ₽
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBasket;
