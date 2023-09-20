import React from 'react';
import Popup from '../Popup';
import './ModerationNewProductPopup.scss';
import usePopup from '../../../hooks/usePopup';

const ModerationNewProductPopup = () => {
  const { isOpen, closePopup } = usePopup('addNewItem');
  return (
    <Popup isOpen={isOpen} onClose={closePopup}>
      <div className="moderation-new-product-popup">
        <h3 className="moderation-new-product-popup__title">Почти готово</h3>
        <p className="moderation-new-product-popup__text">
          Ваш запрос отправлен на модерацию. В среднем проверка занимает 30 мин
        </p>
        <p className="moderation-new-product-popup__text">
          После проверки карточка товара появится в вашем личном кабинете
        </p>
      </div>
    </Popup>
  );
};

export default ModerationNewProductPopup;
