import React from 'react';
import './AccountTitle.scss';

const AccountTitle = ({ title, icon, name }) => {
  return (
    <section className="account-title">
      <div className="account-title__logo"></div>
      <div className="account-title__conteiner">
        <h2 className="account-title__description">{name}</h2>
        <p className="account-title__text">{title}</p>
      </div>
      <button className="account-title__button">{icon}</button>
    </section>
  );
};

export default AccountTitle;
