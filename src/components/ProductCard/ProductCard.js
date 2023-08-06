import { Button } from '../Button/Button';
import CommentsCount from '../CommentsCount/CommentsCount';
import IconHearth from '../Icon/Icon_hearth';
import IconScales from '../Icon/Icon_scales';
import ProductRating from '../ProductRating/ProductRating';
import SliderImage from '../SliderImage/SliderImage';
import './ProductCard.scss';

function ProductCard() {
  return (
    <div className="card">
      <SliderImage />
      {/* <img className="card-image" src="" alt="" /> */}
      <div className="card-icons">
        <IconScales />
        <IconHearth />
      </div>

      <div className="card-info">
        <div className="card-top">
          <h3 className="card-title">Детская зимняя куртка</h3>
          <p className="card-price">4000 р</p>
        </div>
        <p className="card-code">1234567</p>
        <div className="card-description">
          Куртка зимняя, утепленная, выполнена из прочной, износостойкой, влагостойкой ткани...
        </div>
        <div className="card-shipper">
          <p className="card-shipper__title">Поставщик: </p>
          <p className="card-shipper__shipper">Название поставщика</p>
        </div>
        <div className="card-min-order">
          <p className="card-min-order__title">Мин. объем заказа:</p>
          <p className="card-min-order__quantity">от 10 шт</p>
        </div>

        <div className="card-bottom">
          <div className="card-statistics">
            <ProductRating />
            <CommentsCount />
          </div>
          <Button size="m" primary={true} border={true} label={'Подробнее'} > </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
