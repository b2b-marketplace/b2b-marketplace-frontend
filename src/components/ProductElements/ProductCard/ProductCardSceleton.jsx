import React from 'react';

import './ProductCard.scss';

/**
 * Скелетон карточки товара
 *
 *
 * @returns {JSX.Element}
 */

function ProductCardSceleton({ product }) {

  return (
    <div className="card card-loading">
      {/* <SliderImage images={product.images} /> */}
      <div className="card__image" />
      <div className="card__info">
        <div className="card__title" />
        <div className="card__shipper" />
        <div className="card__min-order" />
        <div className="card__info-bottom" />
        <div className="card__button" />
      </div>
    </div>
  );
}

export default ProductCardSceleton;
