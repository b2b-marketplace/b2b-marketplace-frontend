import React from 'react';
import { Link } from 'react-router-dom';
import './Question.scss';
import АccountBar from '../../Account/AccountBar/AccountBar';
import IconQuestion from '../../Icon/Icon_question';
import IconMail from '../../Icon/Icon_mail';
import IconCommunication from '../../Icon/Icon_communication';

const Question = () => {
  const menuItems = [
    { icon: <IconQuestion />, link: '#', label: 'Вопросы' },
    { icon: <IconMail />, link: '#', label: 'Напишите нам' },
    { icon: <IconCommunication />, link: '#', label: 'Чат' },
  ];

  return (
    <section className="question">
      <АccountBar menuItems={menuItems} phone="8-800-800-00-00" />
      <div className="question__menu">
        <h2 className="question__title">Часто задаваемые вопросы</h2>
        <div className="question__menu-conteiner">
          <ul className="question__lists">
            <h3 className="question__paragraph">Мой заказ</h3>
            <li className="question__list">
              <Link className="question__link" to="#">
                Как посмотреть статус заказа
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Как редактировать заказ
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Как отменить заказ
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Как получить заказ
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Не получается сделать заказ
              </Link>
            </li>
          </ul>

          <ul className="question__lists">
            <h3 className="question__paragraph">Доставка</h3>
            <li className="question__list">
              <Link className="question__link" to="#">
                Способы доставки
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Стоимость доставки
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Варианты доставки
              </Link>
            </li>
          </ul>

          <ul className="question__lists">
            <h3 className="question__paragraph">Оплата</h3>
            <li className="question__list">
              <Link className="question__link" to="#">
                Способы оплаты
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Ошибки про оплате
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Чеки и документы
              </Link>
            </li>
          </ul>

          <ul className="question__lists">
            <h3 className="question__paragraph">Возвраты и отмены</h3>
            <li className="question__list">
              <Link className="question__link" to="#">
                Как вернуть товар
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Условие и сроки возврата
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Почему мой заказ отменили
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Когда вернуться деньги за отмену или возврат
              </Link>
            </li>
          </ul>

          <ul className="question__lists">
            <h3 className="question__paragraph">Акции и бонусы</h3>
            <li className="question__list">
              <Link className="question__link" to="#">
                Акции
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Бонусы
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Программа лояльности
              </Link>
            </li>
          </ul>

          <ul className="question__lists">
            <h3 className="question__paragraph">О сервисе</h3>
            <li className="question__list">
              <Link className="question__link" to="#">
                Как работает сервис
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Поставщикам
              </Link>
            </li>
            <li className="question__list">
              <Link className="question__link" to="#">
                Покупателям
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Question;
