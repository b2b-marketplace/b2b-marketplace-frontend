import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePopup from '../../../shared/hooks/hooks/usePopup';
import Popup from '../Popup';
import PopupParagraph from '../PopupParagraph/PopupParagraph';
import useCountDown from '../../../shared/hooks/hooks/useCountDown';

const CompleteLoginPopup = () => {
  const { isOpen, closePopup } = usePopup('completeLogin');
  const { resetTimer, startTimer, time } = useCountDown(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      resetTimer();
      startTimer();
    }
  }, [isOpen]);

  useEffect(() => {
    if (time !== 0) return;
    navigate('/account/profile');
    closePopup();
  }, [time]);

  return (
    <Popup isOpen={isOpen} onClose={closePopup} title="Вход успешно выполнен">
      <PopupParagraph className="popup__paragraph_center">
        Через
        <span>{` ${time} секунд `}</span>
        вы попадете в личный кабинет
      </PopupParagraph>
    </Popup>
  );
};

export default CompleteLoginPopup;
