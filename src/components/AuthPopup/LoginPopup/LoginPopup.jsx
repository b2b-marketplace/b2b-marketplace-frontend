
import usePopup from "../../../hooks/usePopup";
import IconPassword from "../../UI/Icon/IconPassword";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";

const LoginPopup = () => {
  const { isOpen, closePopup } = usePopup('login');
  const { openPopup: openCompleteLogin } = usePopup('completeLogin');
  const { openPopup: openRestore } = usePopup('selectRestore');

  const handleSubmit = () => {
    closePopup();
    openCompleteLogin();
  };

  const handleRestore = () => {
    openRestore();
    closePopup();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Вход"
      popupContClassMode={'popup__container_type_form'}
    >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        btnText="Далее"
        btnType={"submit"}
      >
        <fieldset className="popup__fieldset">
          <Input
            name="login"
            type="text"
            placeholder="Логин"
            size="l"
            text="Латиница, цифры"
          />
          <Input
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Пароль"
            size="l"
            text="От 10 символов, латиница, цифры, символы"
          >
            <button className="popup__button input-label__button input-label__button_type_password" type="button">
              <IconPassword isVisiblePassword={false} />
            </button>
          </Input>
          <PopupButton
            type="button"
            className="popup__button popup__underlined-text"
            onClick={handleRestore}
          >
            Забыл логин/пароль
          </PopupButton>
        </fieldset>
      </Form>
    </Popup>
  );
};

export default LoginPopup;
