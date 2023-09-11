import Form from "../Form/Form";
import Input from "../Input/Input";
import Popup from "../Popup";

const RestorePopup = ({ isOpen, onClose, onSubmit, title, inputPlaceholder, inputType, inputName, text, titleClassName }) => {

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        title={title}
        btnText="Далее"
        btnType="submit"
        titleClassName={titleClassName}
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
