import React, { useState } from 'react';
import IconClose from '../../Icon/Icon_close';
import IconPlus from '../../Icon/Icon_plus';
import IconVisa from '../../Icon/Icon_visa';
import './AccountPaymentInfo.scss';

const AccountPaymentInfo = () => {
  // Define the state to store the list of saved cards
  const [savedCards, setSavedCards] = useState([
    // Initialize your saved cards here
    // Example:
    // { id: 1, cardNumber: '1234 5678 9012 3456', isDefault: true },
    // { id: 2, cardNumber: '9876 5432 1098 7654', isDefault: false },
  ]);

  // Function to make a card the default payment method
  const makeDefaultCard = (id) => {
    const updatedCards = savedCards.map((card) => ({
      ...card,
      isDefault: card.id === id,
    }));
    setSavedCards(updatedCards);
  };

  // Function to remove a card
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
                <button
                  type="button"
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
