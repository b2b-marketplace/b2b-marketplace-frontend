import React from 'react';
import Popup from '../Popup';
import './CancelAddProductPopup.scss';
import usePopup from '../../../hooks/usePopup';
import { Button } from '../../UI/Button/Button';

const CancelAddProductPopup = () => {
  const { isOpen, closePopup } = usePopup('cancelAddnewItem');
  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      extraClassName="cancel-add-product-popup"
      title="Уверены, что хотите отменить?">
      <p className="cancel-add-product-popup__subtitle">Данные об этом товаре будут сброшены</p>
      <div className="cancel-add-product-popup__conteiner">
        <Button size="m" primary dark>
          Да, уверен
        </Button>
        <Button size="m" primary>
          Редактировать
        </Button>
      </div>
    </Popup>
  );
};

export default CancelAddProductPopup;
