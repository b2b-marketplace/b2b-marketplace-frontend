import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Button } from '../../components/UI/Button/Button';

import box3 from '../../images/banner-promo/box5-404.png';
import box2 from '../../images/banner-promo/box2-404.png';
import box1 from '../../images/banner-promo/box1-404.png';

import './ErrorPage.scss';

/**
 *
 * @param {number} code - Код ошибки.
 * @param {string} title - Заголовок ошибки.
 * @param {string} text - Текст ошибки.
 * @returns {JSX.Element} Компонент страницы ошибки.
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const ErrorPage = ({
  code = 404,
  title = 'Страница не найдена',
  text = 'Возможно неправильно набран адрес или такой страницы больше не существует',
}) => {
  const [error, setError] = useState({ code, title, text });
  const navigate = useNavigate();
  useEffect(() => {
    setError((prevError) => ({
      ...prevError,
      code: code || prevError.code,
      title: title || prevError.title,
      text: text || prevError.text,
    }));
  }, [code, title, text]);
  return (
    <div className="error-page">
      <div className="error-page__conteiner">
        <div className="error-page__title">{error.code}</div>
        <img className="error-page__image_box1" src={box1} alt="box" />
        <img className="error-page__image_box2" src={box2} alt="box" />
        <img className="error-page__image_box3" src={box3} alt="box" />
      </div>
      <h3 className="error-page__subtitle">{error.title}</h3>
      <p className="error-page__text">{error.text}</p>
      <p className="error-page__text">Перейдите на главную, чтобы продолжить работу</p>
      <Link to="/" className="error-page__link">
        <Button size="l" primary dark>
          На главную
        </Button>
      </Link>
      {/*//@TODO Дать пользователю выбор, вернуться на главную страницу или назад*/}
      {/*<div className="error-page__button-back">*/}
      {/*  <Button*/}
      {/*    onClick={() => {*/}
      {/*      return navigate(-1);*/}
      {/*    }}*/}
      {/*    size="l"*/}
      {/*    primary*/}
      {/*    dark*/}
      {/*  >*/}
      {/*    Назад*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
};

export default ErrorPage;
