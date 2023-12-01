import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { basketModel } from '../../../entities/basket';
import { ToggleBasketItemButton, ToggleFavoriteButton } from '../../../features/product';
import SliderImage from '../../SliderImage/SliderImage';
import IconInfo from '../../UI/Icon/Icon_info';
import IconScales from '../../UI/Icon/Icon_scales';

import './ProductCard.scss';

/**
 * Карточка товара
 *
 * @param product - объект с данными о товаре
 *
 * @returns {JSX.Element}
 */

function ProductCard({ product }) {
  const { auth_token, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="card">
      <SliderImage images={product.images} />
      <div className="card__icons">
        {isLoggedIn && (
          <ToggleFavoriteButton
            authToken={auth_token}
            productId={product.id}
            isFavorite={product.is_favorited}
          />
        )}
        <IconScales />
      </div>
      <div className="card__info">
        <Link
          to={`/product/${product.id}`}
          className="card__title"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          {product.name}
        </Link>
        <div className="card__shipper">
          <p className="card__shipper-name">{product.seller.name}</p>
          <IconInfo
            className="card__shipper-icon hint-top-middle"
            data-hint={product.seller.name}
          />
          {/* <Tooltip
            position="top"
            sizeText="l"
            textClassName="card__tooltip"
            tooltipContent={
              <>{product.seller.name}</>
            }>
            <IconInfo/>
          </Tooltip> */}
          {/* <IconInfo className="card__shipper-icon hint-right-middle"/> */}
        </div>

        <div className="card__min-order">
          <p className="card__min-order-title">Мин. заказ:</p>
          <p className="card__min-order-quantity">{`от ${product.wholesale_quantity} шт`}</p>
        </div>

        <div className="card__info-bottom">
          <p className="card__price">{`${product.price} `}&#x20bd;</p>
        </div>

        <ToggleBasketItemButton productId={product.id} quantity={product.wholesale_quantity} />
      </div>
    </div>
  );
}

export default ProductCard;
