import React from 'react';
import './Registration.scss';
import logo from '../../image/logo.svg';
import IconArrow from '../Icon/Icon_arrow';
import { Button } from '../Button/Button';

const Registration = () => {
  return (
    <section className="registration">
      <button className="registration__navigation-button">
        <IconArrow />
      </button>
      <div className="registration__conteiner">
        <div>
          <h2 className="registration__title">
            Зарегистрируйтесь на нашем портале и найдите новых клиентов, заказчиков и партнёров!
          </h2>
          <div className="registration__button">
            <Button size="xxl" primary={false} border={true} label={'Зарегистрироваться'} />
            <Button size="xxl" primary={true} border={true} label={'Войти'} />
          </div>
        </div>
        <img className="registration__logo" src={logo} alt="Логотип." />
      </div>
    </section>
  );
};

export default Registration;
