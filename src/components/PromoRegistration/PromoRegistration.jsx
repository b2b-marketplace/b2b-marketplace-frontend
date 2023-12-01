import React from 'react';

import usePopup from '../../shared/hooks/usePopup';
import { Button } from '../UI/Button/Button';

import logo from '../../images/photo_promo-registration.jpg';

import './PromoRegistration.scss';

const PromoRegistration = ({ className }) => {
  const { openPopup: openRegisterPopup } = usePopup('registration');
  const { openPopup: openLoginPopup } = usePopup('login');

  return (
    <section className={`promo-registration ${className || ''}`}>
      <div className="promo-registration__conteiner">
        <div className="promo-registration__control">
          <h2 className="promo-registration__title">Покупайте дешевле!</h2>
          <p className="promo-registration__text">
            Зарегистрируйтесь на нашем портале и найдите новых клиентов, заказчиков и партнёров!
          </p>

          <Button size="xl" onClick={openRegisterPopup} primary dark>
            Зарегистрироваться
          </Button>
          <Button size="xl" onClick={openLoginPopup} primary className="promo-registration__button">
            Войти
          </Button>
        </div>
        <img className="promo-registration__logo" src={logo} alt="Фото" />
      </div>
    </section>
  );
};

export default PromoRegistration;
