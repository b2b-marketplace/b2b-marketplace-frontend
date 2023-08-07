import { Button } from '../Button/Button';
import CommentsCount from '../CommentsCount/CommentsCount';
import IconHearth from '../Icon/Icon_hearth';
import IconScales from '../Icon/Icon_scales';
import ProductRating from '../ProductRating/ProductRating';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';
import { images } from '../SliderImage/images';

function ProductCard() {
  return (
    <div className="card">
      <SliderImage images={images} />
      <div className="card__icons">
        <IconScales />
        <IconHearth />
      </div>

      <div className="card__info">
        <div className="card__info_top">
          <h3 className="card__title">Детская зимняя куртка</h3>
          <p className="card__price">4000 р</p>
        </div>
        <p className="card__code">1234567</p>
        <div className="card__description">
          Куртка зимняя, утепленная, выполнена из прочной, износостойкой, влагостойкой ткани...
        </div>
        <div className="card__shipper">
          <p className="card__shipper_title">Поставщик: </p>
          <p className="card__shipper_shipper">Название поставщика</p>
        </div>
        <div className="card__min-order">
          <p className="card__min-order_title">Мин. объем заказа:</p>
          <p className="card__min-order_quantity">от 10 шт</p>
        </div>

        <div className="card__info_bottom">
          <div className="card__statistics">
            <ProductRating />
            <CommentsCount />
          </div>
          <Button size="m" primary={true} border={true} label={'Подробнее'} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
