import React from 'react';
import './AccountTitle.scss';
import logo from '../../../../images/logofooter.svg';

const AccountTitle = ({ title, icon, name }) => {
  return (
    <section className="account-title">
      <div className="account-title__conteiner">
        <div className="account-title__conteiner-logo">
          <img className="account-title__logo" src={logo} alt="Логотоп." />
        </div>

        <h2 className="account-title__description">{name}</h2>
        <p className="account-title__text">{title}</p>
      </div>
      <button className="account-title__button" type="button">
        {icon}
      </button>
    </section>
  );
};

export default AccountTitle;
