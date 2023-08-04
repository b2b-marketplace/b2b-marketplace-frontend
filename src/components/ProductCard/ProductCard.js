import Button from '../Button/Button';
import CommentsCount from '../CommentsCount/CommentsCount';
import IconHearth from '../Icon/Icon_hearth';
import IconScales from '../Icon/Icon_scales';
import ProductRating from '../ProductRating/ProductRating';
import './ProductCard.scss';
// import Slider from '../Slider/Slider';
// import { ReactComponent as Icon } from '../../images/icons/basket.svg';
// import icon from '../../images/icons/basket.svg';

function ProductCard() {
  return (
    <div className="card">
      {/* <Slider /> */}
      <img className="card-image" src="" alt="" />
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
        <p className="card-description">
          Куртка зимняя, утепленная, выполнена из прочной, износостойкой, влагостойкой ткани...уртка
          зимняя, утепленная, выполнена из прочной, износостойкой, влагосто
        </p>
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
          {/* <button className="card-btn-detail">Подробнее</button> */}
          <Button className={'btn btn_size_middle btn_color_light btn_color_light_border'} text="Подробнее" />
        </div>
      </div>
      {/* <div className="icons"></div> */}
    </div>
  );
}

export default ProductCard;
