import React, { useState } from 'react';
import './AccountPaymentInfo.scss';
import IconClose from '../../Icon/Icon_close';
import IconPlus from '../../Icon/Icon_plus';
import IconVisa from '../../Icon/Icon_visa';

const AccountPaymentInfo = () => {
  const [savedCards, setSavedCards] = useState([
    {
      id: 1,
      cardNumber: '**** **** **** 1234',
      isDefault: true,
    },
    {
      id: 2,
      cardNumber: '**** **** **** 5678',
      isDefault: false,
    },
  ]);

  const makeDefaultCard = (id) => {
    const updatedCards = savedCards.map((card) => ({
      ...card,
      isDefault: card.id === id,
    }));
    setSavedCards(updatedCards);
  };

  const removeCard = (id) => {
    const updatedCards = savedCards.filter((card) => card.id !== id);
    setSavedCards(updatedCards);
  };

  return (
    <div className="account-payment-info">
      <h2 className="account-payment-info__title">Способы оплаты</h2>
      <ul className="account-payment-info__lists">
        {savedCards.map((card) => (
          <li
            className={`account-payment-info__list ${card.isDefault ? 'active' : ''}`}
            key={card.id}
          >
            <label className="account-payment-info__label">
              <div className="account-payment-info__container">
                <IconVisa className="account-payment-info__icon" />
                <input
                  className="account-payment-info__input"
                  type="radio"
                  checked={card.isDefault}
                  onChange={() => makeDefaultCard(card.id)}
                />
              </div>
              <p className="account-payment-info__text">
                {card.isDefault ? 'Основной' : 'Сделать основной'}
              </p>
              <div className="account-payment-info__container">
                {card.cardNumber}
                <button type='button'
                  className="account-payment-info__button-close"
                  onClick={() => removeCard(card.id)}
                >
                  <IconClose />
                </button>
              </div>
            </label>
          </li>
        ))}

        <button className="account-payment-info__button-add" type="button">
          <IconPlus />
        </button>
      </ul>
    </div>
  );
};

export default AccountPaymentInfo;
