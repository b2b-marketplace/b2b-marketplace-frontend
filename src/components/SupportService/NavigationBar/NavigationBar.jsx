import { Link } from 'react-router-dom';
import './NavigationBar.scss';

import IconQuestion from '../../image/Question.svg';
import IconMail from '../../image/mail.svg';
import IconChat from '../../image/chat.svg';

const NavigationBar = () => {
  return (
    <section className="navigation-bar">
      <div className="navigation-bar__conteiner">
        <div className="navigation-bar__menu">
          <h2 className="navigation-bar__title">Служба поддержки</h2>
          <ul className="navigation-bar__lists">
            <li className="navigation-bar__list">
              <img className="navigation-bar__icon" src={IconQuestion} alt="Иконка вопросы." />
              <Link className="navigation-bar__link" to="#">
                Вопросы
              </Link>
            </li>
            <li className="navigation-bar__list">
              <img className="navigation-bar__icon" src={IconMail} alt="Иконка почты." />
              <Link className="navigation-bar__link" to="#">
                Напишите нам
              </Link>
            </li>
            <li className="navigation-bar__list">
              <img className="navigation-bar__icon" src={IconChat} alt="Иконка чата." />
              <Link className="navigation-bar__link" to="#">
                Чат
              </Link>
            </li>
          </ul>
          <a className="navigation-bar__contact" href="tel:+78008000000">
            8-800-800-00-00
          </a>
          <p className="navigation-bar__text">Звонок бесплатный</p>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
