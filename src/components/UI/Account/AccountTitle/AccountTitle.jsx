import React from 'react';
import './AccountTitle.scss';

const AccountTitle = ({ title, icon, name, logoSrc }) => {
  return (
    <section className="account-title">
      <div className="account-title__conteiner">
        <div className="account-title__conteiner-logo">
          <img className='account-title__logo' src={logoSrc} alt="Логотоп." />
        </div>

        <div className="account-title__about">
          <h2 className="account-title__description">{name}</h2>
          <p className="account-title__text">{title}</p>
        </div>
      </div>
      <button className="account-title__button">{icon}</button>
    </section>
  );
};

export default AccountTitle;
