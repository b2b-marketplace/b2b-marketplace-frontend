import './ProductBlock.scss';
import Counter from '../../../UI/Counter/Counter';
import { Button } from '../../../UI/Button/Button';
import IconVerified from '../../../UI/Icon/Icon_verified';
import IconScales from '../../../UI/Icon/Icon_scales';
import IconHearth from '../../../UI/Icon/Icon_hearth';
import ProductRating from '../../../ProductRating/ProductRating';
import CharacteristicColor from '../../../CharacteristicColor/CharacteristicColor';
import { useEffect, useState } from 'react';

export default function ProductBlock({ product }) {
  const defaultImage = product.images[0];
  const [text, setText] = useState('');
  const [mainImage, setMainImage] = useState(defaultImage);
  const descr =
    'Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара. Описание товара.';
  const char =
    'Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. Характеристики товара. ';
  const otz =
    'Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. Отзыв о товаре. ';
  const dost = 'Доставка. Доставка. Доставка. Доставка. Доставка. Доставка. Доставка. Доставка. ';

  const handleMouseEnter = (event) => {
    setMainImage(event.target.src);
  };

  const handleMouseLeave = (event) => {
    setMainImage(defaultImage);
  };

  useEffect(() => {
    setText(descr);
  }, []);

  const handleClickNav = (event) => {
    [
      ...event.target
        .closest('.product-block__navigation')
        .querySelectorAll('.product-block__navigation-item'),
    ].map((item) => item.classList.remove('product-block__navigation-item_checked'));
    event.target.classList.add('product-block__navigation-item_checked');
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
    <section className="product-block">
      <div className="product-block__top">
        <div className="product-block__images">
          <div className="product-block__images-column">
            {product.images.map((image) => (
              <img
                className="product-block__image"
                src={image}
                alt="Изображение товара"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <img className="product-block__main-image" src={mainImage} alt="Крупное фото товара" />
        </div>
        <div className="product-block__info">
          <div className="product-block__title-line">
            <h2 className="product-block__title">{product.title}</h2>
            <ProductRating rating={product.rating} />
          </div>
          <p className="product-block__shipper">{product.shipper}</p>
          <p className="product-block__code">{`Арт. ${product.productCode}`}</p>
          <div className="product-block__status-line">
            {product.availableStatus ? (
              <>
                <IconVerified />
                <p className="product-block__status">В наличии</p>
              </>
            ) : (
              <>
                <IconVerified />
                <p className="product-block__status">Не в наличии</p>
              </>
            )}
          </div>
          <div className="product-block__size-line">
            <p className="product-block__subtitle">Размер</p>
          </div>
          <div className="product-block__color-line">
            <p className="product-block__subtitle">Цвет</p>
            <CharacteristicColor characteristicValue={product.colors} />
          </div>
          <div className="product-block__quantity-line">
            <p className="product-block__subtitle">Кол-во</p>
            <Counter initCount={product.orderQuantity} />
          </div>
          <h3 className="product-block__price">{`${product.price} р`}</h3>
          <div className="product-block__buttons-line">
            <Button size="xxl" primary={false} border={true}>
              В корзину
            </Button>
            <div className="product-block__icons">
              <IconScales />
              <IconHearth />
            </div>
          </div>
        </div>
      </div>
      <div className="product-block__bottom">
        <nav>
          <ul className="product-block__navigation">
            <li
              className="product-block__navigation-item product-block__navigation-item_checked"
              onClick={handleClickNav}>
              Описание
            </li>
            <li className="product-block__navigation-item" onClick={handleClickNav}>
              Характеристики
            </li>
            <li className="product-block__navigation-item" onClick={handleClickNav}>
              Отзывы
            </li>
            <li className="product-block__navigation-item" onClick={handleClickNav}>
              Доставка
            </li>
          </ul>
        </nav>
        <p className="product-block__description">{text}</p>
      </div>
    </section>
  );
}
