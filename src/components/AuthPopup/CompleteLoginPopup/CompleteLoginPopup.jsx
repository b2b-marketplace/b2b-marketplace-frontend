import { useEffect, useState } from 'react';
import usePopup from '../../../hooks/usePopup';
import Popup from '../Popup';
import PopupParagraph from '../PopupParagraph/PopupParagraph';
import { useNavigate } from 'react-router-dom';
import useCountDown from '../../../hooks/useCountDown';

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
