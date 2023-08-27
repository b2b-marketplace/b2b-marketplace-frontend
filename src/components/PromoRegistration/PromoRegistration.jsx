import React from 'react';
import './PromoRegistration.scss';
import logo from '../../images/logo-registration.svg';
import { Button } from '../UI/Button/Button';
import ButtonScrollUp from '../ButtonScrollUp/ButtonScrollUp';

const PromoRegistration = ({ className, onAuth }) => {
  return (
    <section className={`promo-registration ${className ? className : ''}`}>
      <div className="promo-registration__conteiner">
        <div>
          <h2 className="promo-registration__title">Хотите закупаться дешевле?</h2>
          <p className="promo-registration__text">
            Зарегистрируйтесь на нашем портале и найдите новых клиентов, заказчиков и партнёров!
          </p>
          <div className="promo-registration__button">
            <Button size="xxl" primary={false} border={true} onClick={onAuth} value="register">
              Зарегистрироваться
            </Button>
            <Button size="xxl" primary={true} border={true} onClick={onAuth} value="login">
              Войти
            </Button>
          </div>
        </div>
        <img className="promo-registration__logo" src={logo} alt="Логотип." />
      </div>
      <ButtonScrollUp />
    </section>
  );
};

export default PromoRegistration;
