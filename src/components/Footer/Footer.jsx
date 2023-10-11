import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../images/uim_box_footer.svg';
import IconVk from '../UI/Icon/Icon_vk';
import IconTelegram from '../UI/Icon/Icon_telegram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-logo">
          <h2 className="footer__logo-title">
            <img className="footer__logo" src={logo} alt="Логотип." />
            B2Buy.ru
          </h2>
          <h3 className="footer__title">ООО «БиТуБай»</h3>
          <div className="footer__container-links">
            <p className="footer__link">Все права защищены</p>
            <Link className="footer__link" to="/privacy-policy">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        <nav className="footer__menu">
          <ul className="footer__lists">
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Каталог товаров
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Поставщики
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Заявки на закупки
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Оплата и доставка
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Возврат
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Акции
              </Link>
            </li>
          </ul>

          <ul className="footer__lists">
            <li className="footer__list">
              <Link className="footer__link" to="/portal-rules">
                Правила портала
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="/question-form">
                Служба поддержки
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="/question-page">
                Часто задаваемые вопросы
              </Link>
            </li>
            <li className="footer__list">
              <Link className="footer__link" to="#">
                Контакты
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/about-us">
                О нас
              </Link>

              <div className="footer__icon-links">
                <a className="footer__icon-link" href="#" target="_blank">
                  <IconVk />
                </a>
                <a className="footer__icon-link" href="#" target="_blank">
                  <IconTelegram />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
