import './ProductBlock.scss';
import Counter from '../../../components/UI/Counter/Counter';
import { Button } from '../../../components/UI/Button/Button';
import IconVerified from '../../../components/UI/Icon/Icon_verified';
import IconNotVerified from '../../../components/UI/Icon/Icon_not-verified';
import IconScales from '../../../components/UI/Icon/Icon_scales';
import IconHearth from '../../../components/UI/Icon/Icon_hearth';
import IconInfo from '../../../components/UI/Icon/Icon_info';
import IconFire from '../../../components/UI/Icon/Icon_fire_big';
import ProductRating from '../../../components/ProductRating/ProductRating';
import CharacteristicColor from '../../../components/CharacteristicColor/CharacteristicColor';
import { useEffect, useState } from 'react';

export default function ProductBlock({ product }) {
  const defaultImage = product.images[0];
  const [text, setText] = useState('');
  const [mainImage, setMainImage] = useState(defaultImage);
  const descr =
    'Городской рюкзак из качественных материалов Urbano - неотъемлемый аксессуар современного человека. Рюкзак выполнен из надежных, приятных на ощупь материалов. Качественные материалы этого рюкзака не теряют свои свойства и не мнутся. Рюкзак хорошо держит форму. Рюкзак вместительный. Множество отделений и мест для аксессуаров. Помещается ноутбук диагональю 15,4, документы формата А4, папки, кошелек, ключи, телефон, внешний аккумулятор и многое другое. Рюкзак удобный и практичный. Рюкзак лёгкий, с лямками и ручкой для ношения в руке. Рюкзак имеет множество внешних карманов, а также потайной, все на молнии и отделение для документов. Размер 42 x 30 x 12 см Качественная фурнитура и материалы, позволят прослужить рюкзаку не один год. Городской рюкзак, выбор стильных и современных людей';
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
        .closest('.navigation')
        .querySelectorAll('.navigation__item'),
    ].map((item) => item.classList.remove('navigation__item_checked'));
    event.target.classList.add('navigation__item_checked');
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
        <div className="images">
          <div className="images__column">
            {product.images.map((image) => (
              <img
                className="images__item"
                src={image}
                alt="Изображение товара"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <img className="images__main" src={mainImage} alt="Крупное фото товара" />
        </div>

        <div className="info">
          <div className="info__title-line">
            <h2 className="info__title">{product.title}</h2>
            <ProductRating rating={product.rating} />
          </div>

          <div className='info__shipper'>
            <p className="info__shipper-name">{product.shipper}</p>            
            <IconInfo className='info__shipper-icon hint-right-middle' data-hint={product.shipper}/>            
          </div>

          <p className="info__code">{`Арт. ${product.productCode}`}</p>

          <div className="info__status-line">
            {product.availableStatus ? (
              <>
                <IconVerified />
                <p className="info__status">В наличии</p>
              </>
            ) : (
              <>
                <IconNotVerified />
                <p className="info__status">Не в наличии</p>
              </>
            )}
          </div>

          <div className="info__size-line">
            <p className="info__size">Размер</p>
          </div>

          <div className="info__color-line">
            <p className="info__color">Цвет</p>
            <CharacteristicColor characteristicValue={product.colors} />
          </div>

          
        </div>

        <div className='order'>
          <div className='order__price'>           
            <p className="order__price-value">{`${product.price} ` } &#x20bd;
              <span className='order__price-unit'>{`за ${product.unit}`}</span>
            </p>
              
           
            <div className='order__price-quantity'>
              <div className='order__price-quantity-now' style={{width: (product.piecesNow / product.piecesAll) * 100 + '%'}}/>
            </div>

            <p className='order__price-remainder'>
              Осталось: <span className='order__price-remainder-now'>{`${product.piecesNow} ${product.unit}`}</span>
            </p> 

            <p className='order__price-min-order'>{`Минимальное количество товара для заказа: ${product.minOrder}`}</p>
          </div>
          
          <div className='order__quantity'>
            <Counter initCount={product.orderQuantity} min={product.minOrder} />
          
            <div className='order__quantity-promo'>
              <IconFire className='order__quantity-icon'/>
              Больше&nbsp;заказ&nbsp;— меньше цена за единицу
            </div>
          </div>

          <div className='order__buttons'>
            <Button size='xl' mode='secondary' >В корзину</Button>
            <div className='order__buttons-icons'>
              <IconScales />
              <IconHearth/>
            </div>
          </div>          
        </div>
      </div>
      <div className="product-block__bottom">
        <nav>
          <ul className="navigation">
            <li
              className="navigation__item navigation__item_checked"
              onClick={handleClickNav}>
              Описание
            </li>
            <li className="navigation__item" onClick={handleClickNav}>
              Характеристики
            </li>
            <li className="navigation__item" onClick={handleClickNav}>
              Отзывы
            </li>
            <li className="navigation__item" onClick={handleClickNav}>
              Доставка
            </li>
          </ul>
        </nav>
        <p className="text">{text}</p>
      </div>
    </section>
  );
}
