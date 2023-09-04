
import Form from "../Form/Form";
import Input from "../Input/Input";
import NextButton from "../NextButton/NextButton";
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
          size="xl"
          text="Латиница, цифры"
        />
        <Input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Пароль"
          size="xl"
          text="От 10 символов, латиница, цифры, символы"
        />
        <PopupButton
          type="button"
          className="popup__button popup__underlined-text"
          onClick={onRestore}
        >
          Забыл логин/пароль
        </PopupButton>
        <NextButton onNext={handleSubmit} />

      </Form>
    </Popup>
  );
};

export default LoginPopup;
