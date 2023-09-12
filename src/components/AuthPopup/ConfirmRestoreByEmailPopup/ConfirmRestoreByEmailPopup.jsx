import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";
import PopupCompleteParagraph from "../PopupCompleteParagraph/PopupCompleteParagraph";

const ConfirmRestoreByEmailPopup = ({ isOpen, onClose }) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Мы отправили на указанный адрес ссылку для сброса пароля"
    >
      <>
        <PopupCompleteParagraph className="popup__complete-paragraph_center">Если не нашли письмо от нас, проверьте папку спам</PopupCompleteParagraph>
        <PopupButton
          type="button"
          className="popup__button popup__underlined-text popup__underlined-text_type_resend"
        >
          Отправить повторно через 00:10
        </PopupButton>
      </>
    </Popup>
  );
};

export default ConfirmRestoreByEmailPopup;
