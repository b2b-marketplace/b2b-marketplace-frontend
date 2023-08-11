import { Button } from '../Button/Button';
import IconHearth from '../Icon/Icon_hearth';
import IconScales from '../Icon/Icon_scales';
import ProductRating from '../ProductRating/ProductRating';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';
// import { images } from '../../utils/images';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card">
      <SliderImage images={product.images} />
      <div className="card__icons">
        <IconScales />
        <IconHearth />
      </div>

      <div className="card__info">
        <div className="card__info_top">
          <Link to={`/product/${product.id}`} className="card__title">
            {product.title}
          </Link>
          <ProductRating rating={product.rating} />
        </div>
        <p className="card__shipper">{product.shipper}</p>

        <div className="card__description">{product.description}</div>

        <div className="card__min-order">
          <p className="card__min-order_title">Мин. заказ:</p>
          <p className="card__min-order_quantity">{`от ${product.orderQuantity} шт`}</p>
        </div>

        <p className="card__price">{`${product.price} р`}</p>

        <Button size="m" primary={true} border={true}>
          В корзину
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
