import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";
import PopupCompleteParagraph from "../PopupCompleteParagraph/PopupCompleteParagraph";

const ConfirmRestoreByEmailPopup = ({ isOpen, onClose }) => {

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__container">
        <h2 className="popup__title">Мы отправили на указанный адрес ссылку для сброса пароля</h2>
        <PopupCompleteParagraph className="popup__complete-paragraph_center">Если не нашли письмо от нас, проверьте папку спам</PopupCompleteParagraph>
        <PopupButton
          type="button"
          className="popup__button popup__underlined-text popup__underlined-text_resend_email"
        >
          Отправить повторно через 00:10
        </PopupButton>
      </div>
    </Popup>
  );
};

export default ConfirmRestoreByEmailPopup;
