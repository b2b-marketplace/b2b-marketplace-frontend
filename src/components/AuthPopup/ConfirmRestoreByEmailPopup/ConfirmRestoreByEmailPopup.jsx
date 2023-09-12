import usePopup from "../../../hooks/usePopup";
import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";
import PopupParagraph from "../PopupParagraph/PopupParagraph";

const ConfirmRestoreByEmailPopup = () => {
  const { isOpen, closePopup } = usePopup('confirmRestoreByEmail');
  
  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Мы отправили на указанный адрес ссылку для сброса пароля"
    >
      <>
        <PopupParagraph className="popup__paragraph_center">Если не нашли письмо от нас, проверьте папку спам</PopupParagraph>
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
