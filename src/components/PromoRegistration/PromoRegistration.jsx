import React from 'react';
import './PromoRegistration.scss';
import logo from '../../images/photo_promo-registration.jpg';
import { Button } from '../UI/Button/Button';

const PromoRegistration = ({ className, onAuth }) => {
  return (
    <section className={`promo-registration ${className || ''}`}>
      <div className="promo-registration__conteiner">
        <div className="promo-registration__control">
          <h2 className="promo-registration__title">Покупайте дешевле!</h2>
          <p className="promo-registration__text">
            Зарегистрируйтесь на нашем портале и найдите новых клиентов, заказчиков и партнёров!
          </p>

          <Button size="xl" mode='secondary' value="register" onClick={onAuth} border={false}>
            Зарегистрироваться
          </Button>
          <Button size="xl" mode='primary' value="login" onClick={onAuth} border={true}>
            Войти
          </Button>
        </div>
        <img className="promo-registration__logo" src={logo} alt="Фото" />
      </div>
    </section>
  );
};

export default PromoRegistration;
