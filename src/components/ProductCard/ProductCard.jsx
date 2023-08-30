import { Button } from '../UI/Button/Button';

import IconInfo from '../UI/Icon/Icon_info';
import IconHearth from '../UI/Icon/Icon_hearth';
import IconScales from '../UI/Icon/Icon_scales';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card">
      <SliderImage images={product.images} />


      <div className="card__info">
        <Link to={`/product/${product.id}`} className="card__title">
          {product.description}
        </Link>
        <div className='card__shipper'>
          <p className="card__shipper-name">{product.shipper}</p>
          <IconInfo />
        </div>

        <div className="card__min-order">
          <p className="card__min-order-title">Мин. заказ:</p>
          <p className="card__min-order-quantity">{`от ${product.orderQuantity} шт`}</p>
        </div>

        <div className='card__info-bottom'>

          <p className="card__price">{`${product.price} `}&#x20bd;</p>
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
