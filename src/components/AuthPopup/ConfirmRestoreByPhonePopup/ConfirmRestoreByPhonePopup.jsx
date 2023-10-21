import { useEffect, useState } from 'react';

import PopupButton from '../PopupButton/PopupButton';
import Popup from '../Popup';
import PinCodeInput from '../PinCodeInput/PinCodeInput';
import Form from '../Form/Form';
import usePopup from '../../../shared/hooks/usePopup';

const ConfirmRestoreByPhonePopup = ({ initDigit = ['', '', '', ''] }) => {
  const { isOpen, closePopup } = usePopup('confirmRestoreByPhone');
  const { openPopup: openNewPassword } = usePopup('newPassword');

  const [digits, setDigits] = useState(initDigit);

  const changeDigitsHandler = (newDigits) => {
    setDigits(newDigits);
  };

  const handleSubmit = () => {
    closePopup();
    openNewPassword();
  };

  useEffect(() => {
    return () => setDigits(initDigit);
  }, [isOpen]);

  useEffect(() => {
    if (digits.some((digit) => !digit)) return;
    handleSubmit();
  }, [digits]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Введите код сброса пароля, который пришел на указанный вами номер"
    >
      <Form className="popup__form popup__form_more_gap" onSubmit={handleSubmit}>
        <PinCodeInput digits={digits} changeHandler={changeDigitsHandler} />
        <PopupButton
          type="button"
          className="popup__button popup__underlined-text popup__underlined-text_type_resend"
        >
          Отправить повторно через 01:00
        </PopupButton>
      </Form>
    </Popup>
  );
};

export default ConfirmRestoreByPhonePopup;
