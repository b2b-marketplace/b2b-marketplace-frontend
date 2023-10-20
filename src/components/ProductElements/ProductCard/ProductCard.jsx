import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addProduct, deleteProduct } from '../../../app/store/slices/basketSlice';
import {
  addProduct as addFavProduct,
  deleteProduct as deleteFavProduct,
} from '../../../app/store/slices/favoritesSlice';
import SliderImage from '../../SliderImage/SliderImage';
import { Button } from '../../UI/Button/Button';
import IconHearth from '../../UI/Icon/Icon_hearth';
import IconHearthBlack from '../../UI/Icon/Icon_hearth-black';
import IconInfo from '../../UI/Icon/Icon_info';
import IconScales from '../../UI/Icon/Icon_scales';

import './ProductCard.scss';

function ProductCard({ product }) {
  const [isProductSelect, setIsProductSelect] = useState(false);
  const [isProductfav, setIsProductfav] = useState(false);
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket.basket);
  const favoritesList = useSelector((state) => state.favorites.favorites);

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (
      basketList.basket_products.length &&
      basketList.basket_products.find((item) => item.id === product.id)
    )
      setIsProductSelect(true);
  }, [basketList.basket_products, product.id]);

  useEffect(() => {
    if (
      favoritesList.favorites_products.length &&
      favoritesList.favorites_products.find((item) => item.id === product.id)
    )
      setIsProductfav(true);
  }, [favoritesList.favorites_products, product.id]);

  const handleSelect = () => {
    isProductSelect
      ? dispatch(deleteProduct({ productIds: product.id }))
      : dispatch(addProduct({ productIds: product.id, quantity: product.wholesale_quantity }));
    setIsProductSelect(!isProductSelect);
  };

  const handleSelect2 = () => {
    isProductfav
      ? dispatch(deleteFavProduct({ productIds: product.id }))
      : dispatch(addFavProduct({ productIds: product.id, quantity: product.wholesale_quantity }));
    setIsProductfav(!isProductfav);
  };

  return (
    <div className="card">
      <SliderImage images={product.images} />
      <div className="card__icons">
        {isLoggedIn && isProductfav ? (
          <button className="card__button" onClick={handleSelect2} type="button">
            <IconHearthBlack />
          </button>
        ) : (
          <button className="card__button" onClick={handleSelect2} type="button">
            <IconHearth />
          </button>
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

        <Button size="s" primary={false} onClick={handleSelect} pressed={isProductSelect}>
          {isProductSelect ? 'В корзине' : 'В корзину'}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
