import './ProductBlock.scss';
import Counter from '../../../components/UI/Counter/Counter';
import { Button } from '../../../components/UI/Button/Button';
import IconVerified from '../../../components/UI/Icon/Icon_verified';
import IconNotVerified from '../../../components/UI/Icon/Icon_not-verified';
import IconScales from '../../../components/UI/Icon/Icon_scales';
import IconHearth from '../../../components/UI/Icon/Icon_hearth';
import IconInfo from '../../../components/UI/Icon/Icon_info';
import ProductRating from '../../../components/ProductRating/ProductRating';
import CharacteristicColor from '../../../components/CharacteristicColor/CharacteristicColor';
import { useEffect, useState } from 'react';
import CommentsBlock from '../../../components/CommentsBlock/CommentsBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useParams } from 'react-router';

export default function ProductBlock({ product }) {
  const { id } = useParams();

  const defaultImage = product.images[0];
  const [mainImage, setMainImage] = useState(defaultImage);


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
            {product.images.map((image, idx) => (
              <SwiperSlide key={idx} className='images__slide'>
                <img
                  className="images__item"
                  src={image}
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
            <h2 className="info__title">{product.title}</h2>
            {/* <h2 className="info__title">{id}</h2> */}
            <ProductRating rating={product.rating} />
          </div>

          <div className='info__shipper'>
            <p className="info__shipper-name">{product.shipper}</p>
            <IconInfo className='info__shipper-icon hint-right-middle' data-hint={product.shipper} />
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

          {/* <div className="info__size-line">
            <p className="info__size">Размер</p>
          </div>

          <div className="info__color-line">
            <p className="info__color">Цвет</p>
            <CharacteristicColor characteristicValue={product.colors} />
          </div> */}
        </div>

        <div className='order'>
          <div className='order__price'>
            <h3 className="order__price-value">
              {`${new Intl.NumberFormat('ru-RU').format(product.price)} `} &#x20bd;
              <div className='order__icons'>
                <IconScales />
                <IconHearth />
              </div>
            </h3>
            <p className='order__price-piece'>
              {`за ед. ${new Intl.NumberFormat('ru-RU').format(product.price)} `} &#x20bd;
            </p>

            <div className='order__price-quantity'>
              <div className='order__price-quantity-now' style={{ width: (product.piecesNow / product.piecesAll) * 100 + '%' }} />
            </div>

            <p className='order__price-remainder'>
              Осталось: <span className='order__price-remainder-now'>{`${product.piecesNow} шт.`}</span>
            </p>

            <p className='order__price-min-order'>{`Минимальное количество товара для заказа: ${product.minOrder}`}</p>
          </div>

          <div className='order__delivery'>
            <p className='order__delivery-title'>Варианты доставки</p>
            <p className='order__delivery-subtitle'>Самовывоз со склада продавца — <span className='order__delivery-data'>завтра</span></p>
            <p className='order__delivery-subtitle'>Курьером — <span className='order__delivery-data'>10 сентября</span></p>
          </div>

          <Counter initCount={product.minOrder} minValue={product.minOrder} onChangeProductQuantity={(count) => { }} />
          <Button size='xl' primary extraClass='order__button'>В корзину</Button>
        </div>
      </div>

      <div className="product-block__bottom">
        <div className='description'>
          <div className='description__item'>
            <h4 className='description__title'>Описание</h4>
            <p className='description__text'>Городской рюкзак из качественных материалов Urbano — неотъемлемый аксессуар современного человека. Рюкзак выполнен из надежных, приятных на ощупь материалов. Качественные материалы этого рюкзака не теряют свои свойства и не мнутся. Рюкзак хорошо держит форму. Рюкзак вместительный. Множество отделений и мест для аксессуаров. Помещается ноутбук диагональю 15,4, документы формата А4, папки, кошелек, ключи, телефон, внешний аккумулятор и многое другое. Рюкзак удобный и практичный. Рюкзак лёгкий, с лямками и ручкой для ношения в руке. Рюкзак имеет множество внешних карманов, а также потайной, все на молнии и отделение для документов. Размер 42×30×12 см Качественная фурнитура и материалы, позволят прослужить рюкзаку не один год. Городской рюкзак, выбор стильных и современных людей</p>
          </div>
          <div className='description__item'>
            <h4 className='description__title'>Характеристики</h4>
            <p className='description__text'>Городской рюкзак из качественных материалов Urbano — неотъемлемый аксессуар современного человека. Рюкзак выполнен из надежных, приятных на ощупь материалов. Качественные материалы этого рюкзака не теряют свои свойства и не мнутся. Рюкзак хорошо держит форму. Рюкзак вместительный. Множество отделений и мест для аксессуаров. Помещается ноутбук диагональю 15,4, документы формата А4, папки, кошелек, ключи, телефон, внешний аккумулятор и многое другое. Рюкзак удобный и практичный. Рюкзак лёгкий, с лямками и ручкой для ношения в руке. Рюкзак имеет множество внешних карманов, а также потайной, все на молнии и отделение для документов. Размер 42×30×12 см Качественная фурнитура и материалы, позволят прослужить рюкзаку не один год. Городской рюкзак, выбор стильных и современных людей</p>
          </div>
        </div>

        <div className='comments'>
          <h3 className='comments__title'>
            Отзывы
            <p className='comments__count'>15</p>
          </h3>
          <div className='comments__container'>
            <CommentsBlock author='Андрей К.' rating={4.8} text='Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.' />
            <CommentsBlock author='Андрей К.' rating={4.8} text='Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.' />
            <CommentsBlock author='Андрей К.' rating={4.8} text='Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.' />
            <CommentsBlock author='Андрей К.' rating={4.8} text='Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.' />
            <CommentsBlock author='Андрей К.' rating={4.8} text='Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.' />
            <CommentsBlock author='Андрей К.' rating={4.8} text='Хорошие рюкзаки. В жизни цвет немного отличается, более светлый...Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.Хорошие рюкзаки.' />
          </div>
          <Button size='xl' primary >Смотреть все</Button>
        </div>


      </div>
    </section >
  );
}
