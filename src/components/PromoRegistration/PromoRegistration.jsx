import React from 'react';
import './PromoRegistration.scss';
import logo from '../../image/logo.svg';
import IconArrow from '../Icon/Icon_arrow';
import { Button } from '../Button/Button';

const PromoRegistration = () => {
  return (
    <section className="promo-registration">
      <button className="promo-registration__navigation-button">
        <IconArrow />
      </button>
      <div className="promo-registration__conteiner">
        <div>
          <h2 className="promo-registration__title">
            Зарегистрируйтесь на нашем портале и найдите новых клиентов, заказчиков и партнёров!
          </h2>
          <div className="promo-registration__button">
            <Button size="xxl" primary={false} border={true} label={'Зарегистрироваться'} />
            <Button size="xxl" primary={true} border={true} label={'Войти'} />
          </div>
        </div>
        <img className="promo-registration__logo" src={logo} alt="Логотип." />
      </div>
    </section>
  );
};

export default PromoRegistration;
