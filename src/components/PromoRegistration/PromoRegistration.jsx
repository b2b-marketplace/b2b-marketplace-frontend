import React from 'react';
import './PromoRegistration.scss';
import logo from '../../image/logo-registration.svg';
import IconArrowUp from '../Icon/Icon_arrow';
import { Button } from '../Button/Button';

const PromoRegistration = () => {
  return (
    <section className="promo-registration">
      
      <div className="promo-registration__conteiner">
        <div>
          <h2 className="promo-registration__title">Хотите закупаться дешевле?</h2>
          <p className="promo-registration__text">
            Зарегистрируйтесь на нашем портале и найдите новых клиентов, заказчиков и партнёров!
          </p>
          <div className="promo-registration__button">
            <Button size="l" primary={false} border={true} label={'Зарегистрироваться'} />
            <Button size="l" primary={true} border={true} label={'Войти'} />
          </div>
        </div>
        <img className="promo-registration__logo" src={logo} alt="Логотип." />
      </div>
      <button className="promo-registration__navigation-button">
        <IconArrowUp />
      </button>
    </section>
  );
};

export default PromoRegistration;
