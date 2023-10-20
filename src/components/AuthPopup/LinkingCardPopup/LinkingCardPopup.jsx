import React, { useState } from 'react';

import usePopup from '../../../shared/hooks/hooks/usePopup';
import { Button } from '../../UI/Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Popup from '../Popup';

const LinkingCardPopup = ({ onClose, onAddCard }) => {
  const { isOpen, closePopup } = usePopup('linkingCard');

  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardExpiry, setNewCardExpiry] = useState('');
  const [newCardCVV, setNewCardCVV] = useState('');

  const addCard = () => {
    if (newCardNumber && newCardExpiry && newCardCVV) {
      onAddCard(newCardNumber, newCardExpiry, newCardCVV);
      onClose();
    }
  };

  const handleExpiryChange = (e) => {
    const input = e.target.value;
    if (input.length === 2 && !input.includes('/')) {
      setNewCardExpiry(input + '/');
    } else {
      setNewCardExpiry(input);
    }
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Привязка карты"
      popupContClassMode="popup__container_type_form"
    >
      <Form>
        <Input
          size="l"
          type="text"
          placeholder="Номер карты"
          maxLength="22"
          value={newCardNumber}
          required
          onChange={(e) => setNewCardNumber(e.target.value)}
        />
        <div className="popup__inputs">
          <Input
            size="m"
            type="text"
            placeholder="ММ/ГГ"
            value={newCardExpiry}
            required
            onChange={handleExpiryChange}
          />
          <Input
            size="m"
            type="text"
            placeholder="CVV/CVC"
            value={newCardCVV}
            maxLength="3"
            required
            onChange={(e) => setNewCardCVV(e.target.value)}
          />
        </div>
        <Button size="l" primary dark onClick={addCard}>
          Привязать
        </Button>
      </Form>
    </Popup>
  );
};

export default LinkingCardPopup;
