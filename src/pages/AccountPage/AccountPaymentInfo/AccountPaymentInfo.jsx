import React, { useState } from 'react';

import { AccountHeader } from '../../../widgets/account';
import { Container } from '../../../shared/ui/Layout';
import usePopup from '../../../shared/hooks/usePopup';
import RadioButton from '../../../components/UI/RadioButton/RadioButton';
import IconVisa from '../../../components/UI/Icon/Icon_visa';
import IconPlus from '../../../components/UI/Icon/Icon_plus';
import IconClose from '../../../components/UI/Icon/Icon_close';
import LinkingCardPopup from '../../../components/AuthPopup/LinkingCardPopup/LinkingCardPopup';

import './AccountPaymentInfo.scss';

const AccountPaymentInfo = () => {
  const { openPopup: openLinkingCardPopup, closePopup: closeLinkingCardPopup } =
    usePopup('linkingCard');

  const [savedCards, setSavedCards] = useState([
    { id: 1, cardNumber: '1234 5678 9012 3456', isDefault: true },
    { id: 2, cardNumber: '9876 5432 1098 7654', isDefault: false },
  ]);

  const handleAddCard = (newCardNumber, newCardExpiry, newCardCVV) => {
    console.log('Adding card with details:', newCardNumber, newCardExpiry, newCardCVV);
  };

  // Функция, позволяющая использовать карту в качестве способа оплаты по умолчанию
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
    <Container className="account-payment-info">
      <AccountHeader name="ООО «Компания»" title="Продавец" />

      <h2 className="account-payment-info__title">Способы оплаты</h2>
      <ul className="account-payment-info__lists">
        {savedCards.map((card) => (
          <li
            className={`account-payment-info__list ${card.isDefault ? 'active' : ''}`}
            key={card.id}
          >
            <div className="account-payment-info__container">
              <IconVisa className="account-payment-info__icon" />
              <RadioButton
                name="paymentMethods"
                id={`paymentMethod_${card.id}`}
                value={card.id}
                checked={card.isDefault}
                handleChange={() => makeDefaultCard(card.id)}
                color="blue"
              ></RadioButton>
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
          </li>
        ))}

        <button
          className="account-payment-info__button-add"
          type="button"
          onClick={openLinkingCardPopup}
        >
          <IconPlus />
        </button>
      </ul>

      <LinkingCardPopup onClose={closeLinkingCardPopup} onAddCard={handleAddCard} />
    </Container>
  );
};

export default AccountPaymentInfo;
