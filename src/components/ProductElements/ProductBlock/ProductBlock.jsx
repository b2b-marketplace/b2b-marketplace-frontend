import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { commentsList } from './../../../shared/mock/commentsMock';
import { addProduct, deleteProduct, changeQuantity } from '../../../app/store/slices/basketSlice';
import Button from '../../UI/Button/Button';
import Counter from '../../UI/Counter/Counter';
import IconAvailable from '../../UI/Icon/Icon_available';
import IconHearth from '../../UI/Icon/Icon_hearth';
import IconInfo from '../../UI/Icon/Icon_info';
import IconNotAvailable from '../../UI/Icon/Icon_not-available';
import IconScales from '../../UI/Icon/Icon_scales';
import CharacteristicColor from '../CharacteristicColor/CharacteristicColor';
import CommentsBlock from '../CommentsBlock/CommentsBlock';
import ProductRating from '../ProductRating/ProductRating';

import photo from './../../../images/4.jpg';
import noPhoto from '../../../images/nophoto.png';

import './ProductBlock.scss';


/**
 * Блок описания товара
 *
 * @param product - объект с данными товара
 * 
 * @returns {JSX.Element}
 */

export default function ProductBlock({ product }) {
  let imagesList;
  product.images.length === 0 ? (imagesList = [{ image: noPhoto }]) : (imagesList = product.images);

  const [mainImage, setMainImage] = useState();
  const [isProductSelect, setIsProductSelect] = useState(false);
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket.basket);
  const [orderQuantity, setOrderQuantity] = useState(product.wholesale_quantity);

  useEffect(() => {
    if (
      basketList.basket_products.length &&
      basketList.basket_products.find((item) => item.id === product.id)
    )
      setIsProductSelect(true);
    else setIsProductSelect(false);
  }, [basketList.basket_products, product.id]);

  const handleSelect = () => {
    isProductSelect
      ? dispatch(deleteProduct({ productIds: product.id }))
      : dispatch(addProduct({ productIds: product.id, quantity: orderQuantity }));
    setIsProductSelect(!isProductSelect);
  };

  useEffect(() => {
    setMainImage(imagesList[0].image);
  }, [imagesList]);

  const handleImageClick = (event) => {
    setMainImage(event.target.src);
  };

  return (
    <section className="product-block">
      <div className="product-block__top">
        <div className="images">
          <Swiper
            spaceBetween={40}
            slidesPerView={4}
            direction="vertical"
            navigation
            modules={[Navigation]}
            className="images__column"
          >
            {imagesList.map((image, idx) => (
              <SwiperSlide key={idx} className="images__slide">
                <img
                  className="images__item"
                  src={image.image}
                  alt="Изображение товара"
                  onClick={handleImageClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <img className="images__main" src={mainImage} alt="Крупное фото товара" />
        </div>

        <div className="info">
          <div className="info__title-line">
            <h2 className="info__title">{product.name}</h2>
            <div className="info__icons">
              <IconHearth />
              <IconScales />
            </div>
          </div>

          <div className='info__rating-line'>
            <ProductRating rating={4.8} commentsCount={10} />
          </div>

          <div className="info__shipper">
            <p className="info__shipper-name">{product.seller.name || ''}</p>
            <IconInfo
              className="info__shipper-icon hint-right-middle"
              data-hint={`${product.seller.name || ''}, ИНН:${product.seller.inn || ''}, ОГРН:${product.seller.ogrn || ''
              }`}
            />
          </div>

          <p className="info__code">{`Арт. ${product.sku}`}</p>

          <div className="info__status-line">
            {product.quantity_in_stock > 0 ? (
              <>
                <IconAvailable />
                <p className="info__status">В наличии</p>
              </>
            ) : (
              <>
                <IconNotAvailable />
                <p className="info__status">Не в наличии</p>
              </>
            )}
          </div>

          {/* <div className="info__size-line">
            <p className="info__size">Размер</p>
          </div>

          <div className="info__color-line">
            <p className="info__color">Цвет</p>
            <CharacteristicColor characteristicValue={product.colors} />
          </div> */}
        </div>

        <div className="order">
          <div className="order__price">
            <h3 className="order__price-value">
              {`${new Intl.NumberFormat('ru-RU').format(product.price * orderQuantity)} `} &#x20bd;
              {/* <div className="order__icons">
                <IconScales />
                <IconHearth />
              </div> */}
            </h3>
            <p className="order__price-piece">
              {`за ед. ${new Intl.NumberFormat('ru-RU').format(product.price)} `} &#x20bd;
            </p>

            {/* <div className="order__price-quantity">
              <div
                className="order__price-quantity-now"
                style={{
                  width: (product.quantity_in_stock / product.quantity_in_stock) * 100 + '%',
                }}
              />
            </div> */}

            {/* <p className="order__price-remainder">
              Осталось:{' '}
              <span className="order__price-remainder-now">{`${product.quantity_in_stock} шт.`}</span>
            </p> */}

            <p className="order__price-min-order">{`Минимальное количество товара для заказа: ${product.wholesale_quantity}`}</p>
          </div>

          <div className="order__delivery">
            <p className="order__delivery-title">Варианты доставки</p>
            <p className="order__delivery-subtitle">
              Самовывоз со склада — <span className="order__delivery-data">завтра</span>
            </p>
            <p className="order__delivery-subtitle">
              Курьером — <span className="order__delivery-data">10 сентября</span>
            </p>
          </div>

          <Counter
            initCount={product.wholesale_quantity}
            minValue={product.wholesale_quantity}
            maxValue={product.quantity_in_stock}
            onChangeQuantity={(count) => {
              setOrderQuantity(count);
              if (isProductSelect)
                dispatch(changeQuantity({ productIds: product.id, quantity: count }));
            }}
          />
          <Button size="m" primary={false} dark onClick={handleSelect} pressed={isProductSelect}>
            {isProductSelect ? 'В корзине' : 'В корзину'}
          </Button>
        </div>
      </div>

      <div className="product-block__bottom">
        <div className="description">
          <div className="description__item">
            <h4 className="description__title">Описание</h4>
            <p className="description__text">{product.description}</p>
          </div>
          <div className="description__item">
            <h4 className="description__title">Характеристики</h4>
            <ul className="specification">
              <li className="specification__item">
                <span className="specification__name">Страна производитель</span>
                <span className="specification__value">{product.manufacturer_country}</span>
              </li>
              <li className="specification__item">
                <span className="specification__name">Бренд</span>
                <span className="specification__value">{product.brand}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="comments">
          <h3 className="comments__title">
            Отзывы
            <ProductRating rating={4.8} commentsCount={10} />
          </h3>

          <div className='comments__photos'>
            <h4 className='comments__photos-title'>
              Фото покупателей
            </h4>
            <div className='comments__photos-block'>
              <div className='comments__photos-container'>
                <img className='comments__photos-item' src={photo} alt='фото товара от пользователя' />
                <img className='comments__photos-item' src={photo} alt='фото товара от пользователя' />
                <img className='comments__photos-item' src={photo} alt='фото товара от пользователя' />
                <img className='comments__photos-item' src={photo} alt='фото товара от пользователя' />
                <div className='comments__photos-all-info'>
                  <img className='comments__photos-item comments__photos-item_info' src={photo} alt='фото товара от пользователя' />
                  <p className='comments__photos-count'>+ 23</p>
                  // TODO добавить пересчёт всех изображений для товара
                  // TODO вычленить в отдельный компонент подборку фото
                </div>
              </div>
              <Button size='m' primary={false} >Оставить отзыв</Button>
            </div>

          </div>


          <div className="comments__container">
            {commentsList.map(comment=>(<CommentsBlock
              comment={comment}
            />))}
            

          </div>

        </div>
      </div>
    </section>
  );
}
