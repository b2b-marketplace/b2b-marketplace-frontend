import React from 'react';
//import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import logo from '../image/logo.svg';

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="navigation__conteiner">
        <h2 className="navigation__title">
          Текст текст текст текст текст текст текст текст текст текст текст текст
        </h2>
        <img className="navigation__logo" src={logo} alt="Логотип." />
        <button className="navigation__register">Регистрация</button>
        <button className="navigation__login">Войти</button>
      </div>
    </section>
  );
};

export default Navigation;
