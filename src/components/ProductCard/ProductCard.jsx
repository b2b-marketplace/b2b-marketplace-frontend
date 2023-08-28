import { Button } from '../UI/Button/Button';

import IconInfo from '../UI/Icon/Icon_info';
import IconHearth from '../UI/Icon/Icon_hearth';
import IconScales from '../UI/Icon/Icon_scales';
import IconVerified from '../UI/Icon/Icon_verified';
import IconNotVerified from '../UI/Icon/Icon_not-verified';
import IconEdit from '../UI/Icon/Icon_edit';
import IconDelete from '../UI/Icon/Icon_delete';
import ProductRating from '../ProductRating/ProductRating';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const isOwnProduct = true;
  const isVerified = false;
  return (
    <div className="card">
      <SliderImage images={product.images} />
      {/* <div className="card__icons">
        {isOwnProduct ? (
          isVerified ? (
            <>
              <div className="card__icons-right">
                <IconDelete />
                <IconEdit />
              </div>
              <IconVerified />
            </>
          ) : (
            <>
              <div className="card__icons-right">
                <IconDelete />
                <IconEdit />
              </div>
              <IconNotVerified />
            </>
          )
        ) : (
          <div className="card__icons-right">
            <IconScales />
            <IconHearth />
          </div>
        )}
      </div> */}

      <div className="card__info">
        {/* <div className="card__info-top"> */}
        <Link to={`/product/${product.id}`} className="card__title">
          {product.description}
        </Link>
        {/* <ProductRating rating={product.rating} /> */}
        {/* </div> */}
        <div className='card__shipper'>
          <p className="card__shipper-name">{product.shipper}</p>
          <IconInfo />
        </div>

        {/* <div className="card__description">{product.description}</div> */}

        <div className="card__min-order">
          <p className="card__min-order-title">Мин. заказ:</p>
          <p className="card__min-order-quantity">{`от ${product.orderQuantity} шт`}</p>
        </div>

        <div className='card__info-bottom'>

          <p className="card__price">{`${product.price} ₽`}</p>
          <div className='card__icons'>
            <IconHearth />
            <IconScales />
          </div>
        </div>

        <Button size="m" mode='tertiary'>
          В корзину
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
