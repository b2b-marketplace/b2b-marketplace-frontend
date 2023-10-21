import { useEffect } from 'react';

import PopupParagraph from '../PopupParagraph/PopupParagraph';
import PopupButton from '../PopupButton/PopupButton';
import Popup from '../Popup';
import useRestore from '../../../shared/hooks/useRestore';
import usePopup from '../../../shared/hooks/usePopup';
import useCountDown from '../../../shared/hooks/useCountDown';
import authApi from '../../../shared/api/authApi';

const ConfirmRestoreByEmailPopup = () => {
  const { isOpen, closePopup } = usePopup('confirmRestoreByEmail');

  const { resetTimer, startTimer, time, formatTime } = useCountDown(10);

  const transfomedTime = formatTime(time);

  const { restoreValue, resetType } = useRestore('email');

  const handleResend = () =>
    authApi
      .restoreByEmail({ email: restoreValue })
      .then(() => {
        resetTimer();
        startTimer();
      })
      .catch(console.log);

  useEffect(() => {
    if (isOpen) {
      resetTimer();
      startTimer();
    } else {
      resetType();
    }
  }, [isOpen]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Мы отправили на указанный адрес ссылку для сброса пароля"
    >
      <>
        <PopupParagraph className="popup__paragraph_center">
          Если не нашли письмо от нас, проверьте папку спам
        </PopupParagraph>
        <PopupButton
          type="button"
          onClick={handleResend}
          disabled={time > 0}
          className="popup__button popup__underlined-text popup__underlined-text_type_resend"
        >
          {`Отправить повторно через ${transfomedTime}`}
        </PopupButton>
      </>
    </Popup>
  );
};

export default ConfirmRestoreByEmailPopup;
