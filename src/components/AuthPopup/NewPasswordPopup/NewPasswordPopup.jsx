
import Input from "../Input/Input";
import Popup from "../Popup";
import IconPassword from "../../UI/Icon/IconPassword";
import Form from "../Form/Form";
import { Button } from "../../UI/Button/Button";

const NewPasswordPopup = ({ isOpen, onClose, onSubmit }) => {

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
        <h2 className="popup__title">Придумайте новый пароль</h2>
        <Input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Пароль"
          size="xl"
          text="От 10 символов, латиница, цифры, символы"
        >
          <button className="popup__button input-label__button input-label__button_type_password" type="button">
            <IconPassword isVisiblePassword={true} />
          </button>
        </Input>
        <Input
          labelClassName="input-label_type_repeat"
          name="repeat-password"
          type="password"
          autoComplete="off"
          placeholder="Повторите пароль"
          size="xl"
          text="Пароли совпадают"
        >
          <button className="popup__button input-label__button input-label__button_type_password" type="button">
            <IconPassword isVisiblePassword={false} />
          </button>
        </Input>

        <Button mode="secondary" onClick={handleSubmit} type="button" size="l">Сохранить</Button>
      </Form>
    </Popup>
  );
};

export default NewPasswordPopup;
