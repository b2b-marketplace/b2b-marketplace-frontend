import Form from "../Form/Form";
import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";
import PopupCompleteParagraph from "../PopupCompleteParagraph/PopupCompleteParagraph";

const ConfirmRestoreByEmailPopup = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title">Мы отправили на указанный адрес ссылку для сброса пароля</h2>
        <PopupCompleteParagraph>Если не нашли письмо от нас, проверьте папку спам</PopupCompleteParagraph>
        <PopupButton
          type="button"
          className="popup__button popup__underlined-text popup__underlined-text_type_resend"
        >
          Письмо не пришло, отправить повторно через 01:00
        </PopupButton>
      </Form>
    </Popup>
  );
};

export default ConfirmRestoreByEmailPopup;
