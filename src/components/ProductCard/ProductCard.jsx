import { Button } from '../Button/Button';
import IconHearth from '../Icon/Icon_hearth';
import IconScales from '../Icon/Icon_scales';
import IconVerified from '../Icon/Icon_verified';
import IconNotVerified from '../Icon/Icon_not-verified';
import IconEdit from '../Icon/Icon_edit';
import IconDelete from '../Icon/Icon_delete';
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
      <div className="card__icons">
        {isOwnProduct ? (
          isVerified ? (
            <>
              <div className="card__icons_right">
                <IconDelete />
                <IconEdit />
              </div>
              <IconVerified />
            </>
          ) : (
            <>
              <div className="card__icons_right">
                <IconDelete />
                <IconEdit />
              </div>
              <IconNotVerified />
            </>
          )
        ) : (
          <div className="card__icons_right">
            <IconScales />
            <IconHearth />
          </div>
        )}
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

        <Button size="xl" primary={true} border={true}>
          В корзину
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
