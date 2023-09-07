import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";
import PinCodeInput from "../PinCodeInput/PinCodeInput";

const ConfirmRestoreByPhonePopup = ({ isOpen, onClose, onSubmit }) => {
  const [digits, setDigits] = useState(['','','','','','']);

  const changeDigitsHandler = (newDigits) => {
    setDigits(newDigits);
  };

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  useEffect(() => {

    return () => setDigits(['','','','','','']);
  }, [isOpen]);

  useEffect(() => {
    if(digits.some(digit => !digit)) return;
    handleSubmit();
  }, [digits]);

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title">На указанный номер вам придет код для сброса пароля</h2>
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
