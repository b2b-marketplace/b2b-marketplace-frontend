import { Button } from "../../UI/Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
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

        <Button mode="secondary" onClick={handleSubmit} type="button" size="l">Далее</Button>
      </Form>
    </Popup>
  );
};

export default RestorePopup;
