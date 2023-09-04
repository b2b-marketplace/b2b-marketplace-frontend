import Form from "../Form/Form";
import Input from "../Input/Input";
import NextButton from "../NextButton/NextButton";
import Popup from "../Popup";

const RestorePopup = ({ isOpen, onClose, onSubmit, title, inputPlaceholder, inputType }) => {

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
        <h2 className="popup__title popup__title_retore">{title}</h2>
        <Input placeholder={inputPlaceholder} type={inputType} size="m" />

        <NextButton onNext={() => ''} />
      </Form>
    </Popup>
  );
};

export default RestorePopup;
