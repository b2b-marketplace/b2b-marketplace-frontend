import React from 'react';
import "./Basket.scss";
import Checkbox from "../Checkbox/Checkbox";
import IconTrash from "../Icon/Icon_trash";
import ProductHorizontal from "../ProductHorizontal/ProductHorizontal";
import IconInfoFill from "../Icon/Icon_info_fill";
import Tooltip from "../Tooltip/Tooltip";

const Basket = () => {

  return (
    <section className="basket">
      <header className="basket__header ">
        <h1 className="basket__title">Корзина</h1>
        <p className="basket__title-product-count">2</p>
      </header>
      <main className="basket__main">
        <div className="basket__panel">
          <div className="basket__panel-checkbox">
            <Checkbox className="basket__checkbox"/>
            <span className="basket__checkbox-text">Выбрать все</span>
          </div>
          <button className="basket__panel-button">
            <IconTrash className="basket__icon-trash"/>
            Удалить выбранные
          </button>
        </div>
        <div className="basket__container">
          <ul className="basket__order-list">
            <li className="basket__order-item">
              <ProductHorizontal className="basket__product"/>
            </li>
          </ul>
          <div className="basket__order-detail-container">
            <div className="basket__order-detail">
              <div className="basket__order-detail-header">
                <h3 className="basket__order-detail-title">Детали заказа</h3>
                <Tooltip position="top" tooltipContent={<>Выбрать способ и адрес доставки вы сможете на этапе оформления заказа</>}>
                  <IconInfoFill className="basket__icon-info"/>
                </Tooltip>
              </div>
              <div className="basket__total">
                <div className="basket__total-label">
                  Итого:
                </div>
                <div className="basket__total-content">
                  <p className="basket__total-suppliers">2 поставщика</p>
                  <p className="basket__total-product">20 товаров</p>
                </div>
              </div>
              <div className="basket__price-total">80 000 ₽</div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Basket;
