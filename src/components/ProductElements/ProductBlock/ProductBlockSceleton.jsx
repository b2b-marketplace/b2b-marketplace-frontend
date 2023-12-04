import React from 'react';

import './ProductBlock.scss';

/**
 * Блок-скелетон товара на время загрузки описания
 *
 *
 * @returns {JSX.Element}
 */

export default function ProductBlockSceleton() {

  return (
    <section className="product-block product-block-loading">
      <div className="product-block__top">
        <div className="images">
          <div className="images__column" >
            <div className="images__slide">
              <div className="images__item" />
            </div>
          </div>
          <div className="images__main" />
        </div>

        <div className="info">
          <div className="info__title-line" />

          <div className="info__rating-line" />

          <div className="info__shipper" />

          <p className="info__code">{''}</p>

          <div className="info__status-line" />

        </div>

        <div className="product-order">
          <div className="product-order__price">
            <h3 className="product-order__price-value">{''}</h3>
            <p className="product-order__price-piece">{''}</p>
            <p className="product-order__price-min-order">{''}</p>
          </div>

          <div className="product-order__delivery">
            <p className="product-order__delivery-title">{''}</p>
            <p className="product-order__delivery-subtitle">{''}</p>
            <p className="product-order__delivery-subtitle">{''}</p>
          </div>

          <div className="product-order__delivery-counter" />

          <div className="product-order__delivery-button" />
        </div>
      </div>

      <div className="product-block__bottom">
        <div className="description">
          <div className="description__item">
            <h4 className="description__title">Описание</h4>
            <p className="description__text">{''}</p>
            <p className="description__text">{''}</p>
            <p className="description__text">{''}</p>
            <p className="description__text">{''}</p>
          </div>
          <div className="description__item">
            <h4 className="description__title">Характеристики</h4>
            <ul className="specification">
              <li className="specification__item" />
              <li className="specification__item" />
              <li className="specification__item" />
              <li className="specification__item" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
