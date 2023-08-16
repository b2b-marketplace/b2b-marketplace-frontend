import React from 'react';
import "./ProductHorizontal.scss";
import Checkbox from "../Checkbox/Checkbox";
import IconTrash from "../Icon/Icon_trash";
import VendorCode from "../VendorCode/VendorCode";
import imageStub from "../../image/basket/Stub_132_128.jpg";
import CharacteristicColor from "../CharacteristicColor/CharacteristicColor";
import IconHearth from "../Icon/Icon_hearth";

const ProductHorizontal = ({ className, ...props }) => {
  const colorList = [
    { key: 1, color: 'red' },
    { key: 2, color: 'blue' },
  ];

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
              <h3 className="product-horizontal__product-title">Детская зимняя куртка</h3>
              <h4 className="product-horizontal__product-company">ООО «Компания»</h4>
            </div>
            <div className="product-horizontal__options">
              <div className="product-horizontal__options-size">
                <div className="product-horizontal__options-size-label">Размер</div>
                <div className="product-horizontal__options-size-value">10-12 лет</div>
              </div>
              <div className="product-horizontal__options-color">
                <div className="product-horizontal__options-color-label">Цвет</div>
                <CharacteristicColor colorList={colorList}/>
              </div>
            </div>
          </div>
        </div>
        <div className="product-horizontal__price-count">
          <div className="product-horizontal__product-count">

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
