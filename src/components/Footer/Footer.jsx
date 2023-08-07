/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../image/logo.svg';
import IconVk from '../Icon/Icon_vk';
import IconTelegram from '../Icon/Icon_telegram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container-logo">
        <img className="footer__logo" src={logo} alt="Логотип." />
        <h2 className="footer__title">ООО «ОПТ»</h2>
        <p className="footer__text">Все права защищены</p>
        <a className="footer__link" href="#" target="_blank">
          Политика конфиденциальности
        </a>
      </div>
      <nav className="footer__links">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Каталог товаров</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Поставщики</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Заявки на закупки</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Оплата и доставка</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Возврат</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Акции</Link>
          </li>
        </ul>
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Правила портала</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Служба поддержки</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Часто задаваемые вопросы</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">Контакты</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link">О нас</Link>
          </li>
          <li className="footer__icon-links">
            <a className="footer__icon-link" href="#" target="_blank">
              <IconVk />
            </a>
            <a className="footer__icon-link" href="#" target="_blank">
              <IconTelegram />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
