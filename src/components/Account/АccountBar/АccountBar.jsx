import { Link } from 'react-router-dom';
import './АccountBar.scss';

import IconExit from '../../Icon/Icon_exit';
import IconTrash from '../../Icon/Icon_trash';
import BiBag from '../../Icon/Icon_bibag';
import IconPackage from '../../Icon/Icon_package';
import Bag from '../../Icon/Icon_bag';
import Message from '../../Icon/Icon_message';
import Lock from '../../Icon/Icon_lock';

const АccountBar = () => {
  return (
    <section className="account-bar">
      <div className="account-bar__conteiner">
        <ul className="account-bar__items">
          <li className="account-bar__item">
            <BiBag />
            <Link className="account-bar__link" to="#">
              Моя компания
            </Link>
          </li>
          <li className="account-bar__item">
            <IconPackage/>
            <Link className="account-bar__link" to="#">
              Товары
            </Link>
          </li>
          <li className="account-bar__item">
            <Bag/>
            <Link className="account-bar__link" to="#">
              Заказы
            </Link>
          </li>
          <li className="account-bar__item">
            <Message/>
            <Link className="account-bar__link" to="#">
              Сообщения
            </Link>
          </li>
          <li className="account-bar__item">
            <Lock/>
            <Link className="account-bar__link" to="#">
              Безопасность
            </Link>
          </li>
        </ul>

        <button className="account-bar__button">
          <IconExit/>
          Выйти
        </button>

        <button className="account-bar__button">
          <IconTrash/>
          Удалить аккаунт
        </button>
        <a className="account-bar__contact" href="tel:+78008000000">
          8-800-800-00-00
        </a>
        <p className="account-bar__text">Звонок бесплатный</p>
      </div>
    </section>
  );
};
export default АccountBar;
