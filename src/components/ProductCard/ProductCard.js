import { Button } from '../Button/Button';
import IconHearth from '../Icon/Icon_hearth';
import IconScales from '../Icon/Icon_scales';
import IconBasket from '../Icon/Icon_basket';
import ProductRating from '../ProductRating/ProductRating';
import ProductComments from '../ProductComments/ProductComments';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';
import { images } from '../../utils/images';

function ProductCard({ product }) {
  return (
    <div className="card">
      <SliderImage images={images} />
      <div className="card__icons">
        <IconScales />
        <IconHearth />
      </div>

      <div className="card__info">
        <div className="card__info_top">
          <h3 className="card__title">{product.title}</h3>
          <div className="card__statistics">
            <ProductRating rating={product.rating} />
            <ProductComments commentsCount={product.commentsCount} />
          </div>
        </div>
        <p className="card__shipper">{product.shipper}</p>

        <div className="card__description">{product.description}</div>

        <div className="card__min-order">
          <p className="card__min-order_title">Мин. заказ:</p>
          <p className="card__min-order_quantity">{`от ${product.orderQuantity} шт`}</p>
        </div>

        <div className="card__info_bottom">
          <Button size="xs" primary={true} border={true}>
            +
            <IconBasket />
          </Button>
          <p className="card__price">{`${product.price} р`}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
