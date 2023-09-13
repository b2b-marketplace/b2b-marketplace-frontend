import { Button } from '../UI/Button/Button';

import IconInfo from '../UI/Icon/Icon_info';
import IconHearth from '../UI/Icon/Icon_hearth';
import IconScales from '../UI/Icon/Icon_scales';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import Tooltip from '../UI/Tooltip/Tooltip';
import IconInfoFil from '../UI/Icon/Icon_info_fill';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../store/slices/basketSlice';

function ProductCard({ product }) {
  const [isProductSelect, setIsProductSelect] = useState(false);
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket.basket);

  useEffect(() => {
    if (
      basketList.basket_products.length &&
      basketList.basket_products.find((item) => item.id === product.id)
    )
      setIsProductSelect(true);
  }, [basketList.basket_products, product.id]);

  const handleSelect = () => {
    isProductSelect
      ? dispatch(deleteProduct({ productIds: product.id }))
      : dispatch(addProduct({ productIds: product.id, quantity: product.wholesale_quantity }));
    setIsProductSelect(!isProductSelect);
  };

  return (
    <div className="card">
      <SliderImage images={product.images} />
      <div className="card__icons">
        <IconHearth />
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
          {/*<IconInfo className="card__shipper-icon hint-right-middle"/>*/}
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
