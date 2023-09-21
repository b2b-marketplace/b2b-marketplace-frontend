import React from 'react';
import Popup from '../Popup';
import './CancelAddProductPopup.scss';
import usePopup from '../../../hooks/usePopup';
import { Button } from '../../UI/Button/Button';

const CancelAddProductPopup = ({ onConfirm, onCancel, onReset }) => {
  const { isOpen, closePopup } = usePopup('cancelAddnewItem');

  const handleEditClick = () => {
    closePopup('cancelAddnewItem');
  };

  const handleConfirmClick = () => {
    onConfirm();

    onReset();

    closePopup('cancelAddnewItem');
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      popupContClassMode={'popup__container_type_product'}
      titleClassMode={'popup__title_size_l'}
      title="Уверены, что хотите отменить?"
    >
      <p className="cancel-add-product-popup">Данные об этом товаре будут сброшены</p>
      <div className="cancel-add-product-popup__conteiner">
        <Button size="m" primary dark onClick={handleConfirmClick}>
          Да, уверен
        </Button>
        <Button size="m" primary onClick={handleEditClick}>
          Редактировать
        </Button>
      </div>
    </Popup>
  );
};

export default CancelAddProductPopup;
