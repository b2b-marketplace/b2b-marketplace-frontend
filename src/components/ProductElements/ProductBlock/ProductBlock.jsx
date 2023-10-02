import './ProductBlock.scss';
import Counter from '../../UI/Counter/Counter';
import { Button } from '../../UI/Button/Button';
import IconAvailable from '../../UI/Icon/Icon_available';
import IconNotAvailable from '../../UI/Icon/Icon_not-available';
import IconScales from '../../UI/Icon/Icon_scales';
import IconHearth from '../../UI/Icon/Icon_hearth';
import IconInfo from '../../UI/Icon/Icon_info';
import ProductRating from '../ProductRating/ProductRating';
import CharacteristicColor from '../CharacteristicColor/CharacteristicColor';
import { useEffect, useState } from 'react';
import CommentsBlock from '../CommentsBlock/CommentsBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import noPhoto from './../../../images/nophoto.png';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct, changeQuantity } from '../../../store/slices/basketSlice';

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
            direction={'vertical'}
            navigation={true}
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
            <ProductRating rating={4.8} />
          </div>

          <div className="info__shipper">
            <p className="info__shipper-name">{product.seller.name || ''}</p>
            <IconInfo
              className="info__shipper-icon hint-right-middle"
              data-hint={`${product.seller.name || ''}, ИНН:${product.seller.inn || ''}, ОГРН:${
                product.seller.ogrn || ''
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
              <div className="order__icons">
                <IconScales />
                <IconHearth />
              </div>
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
              Самовывоз со склада продавца — <span className="order__delivery-data">завтра</span>
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
          <Button size="xl" primary dark onClick={handleSelect} pressed={isProductSelect}>
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
            <p className="comments__count">15</p>
          </h3>
          <div className="comments__container">
            <CommentsBlock
              author="Андрей К."
              rating={4.8}
              text="Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки."
            />
            <CommentsBlock
              author="Андрей К."
              rating={4.8}
              text="Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки."
            />
            <CommentsBlock
              author="Андрей К."
              rating={4.8}
              text="Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки."
            />
            <CommentsBlock
              author="Андрей К."
              rating={4.8}
              text="Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки."
            />
          </div>
          <Button size="l" primary dark>
            Смотреть все
          </Button>
        </div>
      </div>
    </section>
  );
}
