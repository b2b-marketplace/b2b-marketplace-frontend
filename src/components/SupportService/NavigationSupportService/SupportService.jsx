import { Link } from 'react-router-dom';
import './SupportService.scss';

import IconQuestion from '../../image/Question.svg';
import IconMail from '../../image/mail.svg';
import IconChat from '../../image/chat.svg';


const SupportService = () => {
  return (
    <section className="support-service">
      <div className="support-service__conteiner">
        <div className="support-service__menu">
          <h2 className="support-service__title">Служба поддержки</h2>
          <ul className="support-service__lists">
            <li className="support-service__list">
              <img className="support-service__icon" src={IconQuestion} alt="Иконка вопросы." />
              <Link className="support-service__link" to="#">Вопросы</Link>
            </li>
            <li className="support-service__list">
              <img className="support-service__icon" src={IconMail} alt="Иконка почты." />
              <Link className="support-service__link" to="#">Напишите нам</Link>
            </li>
            <li className="support-service__list">
              <img className="support-service__icon" src={IconChat} alt="Иконка чата." />
              <Link className="support-service__link" to="#">Чат</Link>
            </li>
          </ul>
          <a className="support-service__contact" href="tel:+78008000000">
            8-800-800-00-00
          </a>
          <p className="support-service__text">Звонок бесплатный</p>
        </div>
      
      </div>
    </section>
  );
};

export default SupportService;
