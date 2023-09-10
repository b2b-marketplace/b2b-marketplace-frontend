import React from 'react';
import './AccountTitle.scss';

const AccountTitle = ({ title, button, name }) => {
  return (
    <section className="account-title">
      <div className="account-title__container-logo">
        <img className="account-title__logo" src='http://cdn01.bluerose.ir/2019/3/13c43348-b56e-4dc7-946a-1a0bf8514334.jpg' alt="Логотоп" />
      </div>
      <div className="account-title__container">
        <h2 className="account-title__container-description">{name}</h2>
        <p className="account-title__container-text">{title}</p>
      </div>
      {/* <button className="account-title__button" type="button">
        {button}
      </button> */}
    </section>
  );
};

export default AccountTitle;
