import React from 'react';
import './PromoRegistration.scss';
import logo from '../../images/photo_promo-registration.jpg';
import { Button } from '../UI/Button/Button';
import usePopup from '../../hooks/usePopup';

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

          <Button size="l" onClick={openRegisterPopup} primary dark>
            Зарегистрироваться
          </Button>
          <Button
            size="l"
            onClick={openLoginPopup}
            primary
            extraClass={'promo-registration__button'}
          >
            Войти
          </Button>
        </div>
        <img className="promo-registration__logo" src={logo} alt="Фото" />
      </div>
    </section>
  );
};

export default PromoRegistration;
