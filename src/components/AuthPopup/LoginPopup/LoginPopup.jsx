
import { Button } from "../../UI/Button/Button";
import IconPassword from "../../UI/Icon/IconPassword";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";

const LoginPopup = ({ isOpen, onClose, onSubmit, onRestore }) => {

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
        <h2 className="popup__title">Вход</h2>
        <Input
          name="login"
          type="text"
          placeholder="Логин"
          size="xxl"
          text="Латиница, цифры"
        />
        <Input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Пароль"
          size="xxl"
          text="От 10 символов, латиница, цифры, символы"
        >
          <button className="popup__button input-label__button input-label__button_type_password" type="button">
            <IconPassword isVisiblePassword={false} />
          </button>
        </Input>
        <PopupButton
          type="button"
          className="popup__button popup__underlined-text"
          onClick={onRestore}
        >
          Забыл логин/пароль
        </PopupButton>
        <Button mode="secondary" onClick={handleSubmit} type="button" size="l">Далее</Button>

      </Form>
    </Popup>
  );
};

export default LoginPopup;
