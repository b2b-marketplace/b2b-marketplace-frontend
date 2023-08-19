import React from 'react';
import "./ProductHorizontal.scss";
import Checkbox from "../UI/Checkbox/Checkbox";
import IconTrash from "../UI/Icon/Icon_trash";
import VendorCode from "../UI/VendorCode/VendorCode";
import imageStub from "../../images/basket/Stub_132_128.jpg";
import IconHearth from "../UI/Icon/Icon_hearth";
import Counter from "../UI/Counter/Counter";
import ProductCharacteristicsList from "../ProductCharacteristic/ProductCharacteristic";

const ProductHorizontal = ({ className, product, ...props }) => {

  return (
    <div className={`product-horizontal ${className ? className : ""}`}>
      <div className="product-horizontal__buttons">
        <button type="button" className="product-horizontal__button"><IconTrash className="product-horizontal__icon-button"/></button>
        <button type="button" className="product-horizontal__button"><IconHearth className="product-horizontal__icon-button"/></button>
      </div>
      <div className="product-horizontal__container">
        <div className="product-horizontal__content">
          <div className="product-horizontal__checkbox"><Checkbox/></div>
          <div className="product-horizontal__image-with-vendor-code">
            <img className="product-horizontal__image" src={imageStub} alt="Заглушка"/>
            <VendorCode vendorCode="1234567"/>
          </div>
          <div className="product-horizontal__details">
            <div className="product-horizontal__details-header">
              <h3 className="product-horizontal__product-title">{product.name}</h3>
              <h4 className="product-horizontal__product-company">{product.suppliers[ 0 ].company.company_name}</h4>
            </div>
            <div className="product-horizontal__characteristics">
              <ProductCharacteristicsList characteristics={product.characteristic} />
            </div>
          </div>
        </div>
        <div className="product-horizontal__price-count">
          <div className="product-horizontal__product-count">
            <Counter/>
          </div>
          <div className="product-horizontal__product-price">
            40 000 ₽
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontal;
