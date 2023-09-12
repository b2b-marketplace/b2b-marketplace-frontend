import Form from "../Form/Form";
import Input from "../Input/Input";
import Popup from "../Popup";

const RestorePopup = ({ isOpen, onClose, onSubmit, title, inputPlaceholder, inputType, inputName, text, titleClassName }) => {

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      popupContClassMode={titleClassName}
    >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        btnText="Далее"
        btnType="submit"
      >
        <Input
          placeholder={inputPlaceholder}
          type={inputType}
          size="m"
          name={inputName}
          text={text}
        />
      </Form>
    </Popup>
  );
};

export default RestorePopup;
