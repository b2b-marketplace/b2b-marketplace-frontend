import React from 'react';
import './BannerPromo.scss';
import box1 from '../../../images/banner-promo/box1.png';
import box2 from '../../../images/banner-promo/box2.png';
import box3 from '../../../images/banner-promo/box3.png';
import Polygon1 from '../../../images/banner-promo/Polygon1.png';
//import InfoCards from "../InfoCards/InfoCards";

/**
 * BannerPromo компонент для отображения баннера на главной странице.
 *
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента BannerPromo.
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const BannerPromo = () => {
  return (
    <section className="banner-promo">
      <div className="banner-promo__main">
        <div className="banner-promo__figure-images">
          <img
            className="banner-promo__image banner-promo__image_polygon"
            src={Polygon1}
            alt="Polygon1"
          />
          <img
            className=" banner-promo__animation banner-promo__image banner-promo__image_box1"
            src={box1}
            alt="box1"
          />
          <img
            className=" banner-promo__animation banner-promo__image banner-promo__image_box2"
            src={box2}
            alt="box2"
          />
          <img
            className=" banner-promo__animation banner-promo__image banner-promo__image_box3"
            src={box3}
            alt="box3"
          />
        </div>
        <h1 className="banner-promo__title">Тысячи оптовых поставщиков и&nbsp;покупателей здесь</h1>
      </div>
    </section>
  );
};

export default BannerPromo;
