import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button/Button';

import box1 from '../../images/banner-promo/box1-404.png';
import box2 from '../../images/banner-promo/box2-404.png';
import box3 from '../../images/banner-promo/box5-404.png';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__conteiner">
        <div className="not-found__title">
          <p className="not-found__figure">4</p>
          <p className="not-found__figure">4</p>
        </div>
        <img className="not-found__image_box1" src={box1} alt="box1" />
        <img className="not-found__image_box2" src={box2} alt="box2" />
        <img className="not-found__image_box3" src={box3} alt="box3" />
      </div>
      <h3 className="not-found__subtitle">Страница не найдена</h3>
      <p className="not-found__text">
        Возможно неправильно набран адрес или такой страницы больше не существует
      </p>
      <p className="not-found__text">Перейдите на главную, чтобы продолжить работу</p>
      <Link to="/" className="not-found__link">
        <Button size="l" primary dark>
          На главную
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
