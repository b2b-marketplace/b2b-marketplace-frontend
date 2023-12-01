import React from 'react';

import usePopup from '../../../shared/hooks/usePopup';
import Popup from '../Popup';

import './ModerationNewProductPopup.scss';

const ModerationNewProductPopup = () => {
  const { isOpen, closePopup } = usePopup('addNewItem');
  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Почти готово"
      popupContClassMode="popup__container_type_product"
      titleClassMode="popup__title_size_l"
    >
      <div className="moderation-new-product-popup">
        <p className="moderation-new-product-popup__text">
          Ваш запрос отправлен на модерацию. В&nbsp;среднем проверка занимает 30 мин
        </p>
        <p className="moderation-new-product-popup__text">
          После проверки карточка товара появится в&nbsp;вашем личном кабинете
        </p>
      </div>
    </Popup>
  );
};

export default ModerationNewProductPopup;
