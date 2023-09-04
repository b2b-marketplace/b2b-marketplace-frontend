import Form from "../Form/Form";
import Popup from "../Popup";

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
        <h2 className="popup__title">Укажите, кто вы</h2>

      </Form>
    </Popup>
  );
};

export default ConfirmRestoreByEmailPopup;
