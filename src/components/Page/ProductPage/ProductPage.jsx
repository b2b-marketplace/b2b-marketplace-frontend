import { Button } from '../../UI/Button/Button';
import IconVerified from '../../Icon/Icon_verified';
import ProductRating from '../../ProductRating/ProductRating';
import ColorCharacteristic from '../ColorValues/ColorCharacteristic';
import './ProductPage.scss';
import IconScales from '../../Icon/Icon_scales';
import IconHearth from '../../Icon/Icon_hearth';
import { useEffect, useState } from 'react';

export default function ProductPage({ product }) {
  const [text, setText] = useState('');
  const descr =
    'Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара.';
  const char =
    'Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. ';
  const otz =
    'Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. ';
  const dost = 'Доставка. Доставка. Доставка. Доставка. Доставка. Доставка. Доставка. Доставка. ';

  useEffect(() => {
    setText(descr);
  }, []);

  const handleClickNav = (event) => {
    [
      ...event.target
        .closest('.product-page__navigation')
        .querySelectorAll('.product-page__navigation-item'),
    ].map((item) => item.classList.remove('product-page__navigation-item_checked'));
    event.target.classList.add('product-page__navigation-item_checked');
    switch (event.target.textContent) {
    case 'Характеристики':
      setText(char);
      break;
    case 'Описание':
      setText(descr);
      break;
    case 'Отзывы':
      setText(otz);
      break;
    case 'Доставка':
      setText(dost);
      break;
    default:
      setText('');
    }
  };

  return (
    <section className="product-page">
      <div className="product-page__top">
        <div className="product-page__images">
          <div className="product-page__images-column">
            {product.images.map((image) => (
              <img className="product-page__image" src={image} alt='Изображение товара'/>
            ))}
          </div>
          <img className="product-page__main-image" src={product.images[0]} alt='Крупное фото товара'/>
        </div>
        <div className="product-page__info">
          <div className="product-page__title-line">
            <h2 className="product-page__title">{product.title}</h2>
            <ProductRating rating={product.rating} />
          </div>
          <p className="product-page__shipper">{product.shipper}</p>
          <p className="product-page__code">{`Арт. ${product.productCode}`}</p>
          <div className="product-page__status-line">
            {product.availableStatus ? (
              <>
                <IconVerified />
                <p className="product-page__status">В наличии</p>
              </>
            ) : (
              <>
                <IconVerified />
                <p className="product-page__status">Не в наличии</p>
              </>
            )}
          </div>
          <div className="product-page__size-line">
            <p className="product-page__subtitle">Размер</p>
          </div>
          <div className="product-page__color-line">
            <p className="product-page__subtitle">Цвет</p>
            <ColorCharacteristic colorList={product.colors} />
          </div>
          <div className="product-page__quantity-line">
            <p className="product-page__subtitle">Кол-во</p>
          </div>
          <h3 className="product-page__price">{`${product.price} р`}</h3>
          <div className="product-page__buttons-line">
            <Button size="xxl" primary={false} border={true}>
              В корзину
            </Button>
            <div className="product-page__icons">
              <IconScales />
              <IconHearth />
            </div>
          </div>
        </div>
      </div>
      <div className="product-page__bottom">
        <nav>
          <ul className="product-page__navigation">
            <li
              className="product-page__navigation-item product-page__navigation-item_checked"
              onClick={handleClickNav}>
              Описание
            </li>
            <li className="product-page__navigation-item" onClick={handleClickNav}>
              Характеристики
            </li>
            <li className="product-page__navigation-item" onClick={handleClickNav}>
              Отзывы
            </li>
            <li className="product-page__navigation-item" onClick={handleClickNav}>
              Доставка
            </li>
          </ul>
        </nav>
        <p className="product-page__description">{text}</p>
      </div>
    </section>
  );
}
