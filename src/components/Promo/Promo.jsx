import React from 'react';
import './Promo.scss';
import PromoImage from '../../images/promo-image.svg';

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__title-block">
        <h1 className="promo__title">Тысячи&nbsp;оптовых&nbsp;поставщиков и покупателей здесь</h1>
        <ul className="promo__list">
          <li className="promo__list-item">Регистрация за минуту</li>
          <li className="promo__list-item">Быстрая доставка</li>
          <li className="promo__list-item">Сотрудничаем с компаниями и ИП</li>
        </ul>
      </div>
      <img className="promo__image" src={PromoImage}></img>
    </div>
  );
};

export default Promo;
