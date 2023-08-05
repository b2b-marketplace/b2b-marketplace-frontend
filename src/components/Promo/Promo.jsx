import React from 'react';
import './Promo.scss';
import PromoImage from '../../image/promo-image.svg';

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__title-block">
        <h1 className="promo__title">Тысячи&nbsp;поставщиков </h1>
        <h1 className="promo__title">и покупателей</h1>
        <h1 className="promo__title">здесь</h1>
      </div>
      <img className='promo__image' src={PromoImage}></img>
    </div>
  );
};

export default Promo;
