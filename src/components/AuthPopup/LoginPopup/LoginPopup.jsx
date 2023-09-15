
import { useEffect } from "react";
import useInput from "../../../hooks/useInput";
import usePopup from "../../../hooks/usePopup";
import IconPassword from "../../UI/Icon/IconPassword";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Popup from "../Popup";
import PopupButton from "../PopupButton/PopupButton";
import useShowPassword from "../../../hooks/useShowPassword";
import authApi from "../../../utils/authApi";

const LoginPopup = () => {
  const { isOpen, closePopup } = usePopup('login');
  const { openPopup: openCompleteLogin } = usePopup('completeLogin');
  const { openPopup: openRestore } = usePopup('selectRestore');
  const initValueParams = { email: '', password: '' };
  const { isShow, handleShow, resetShow } = useShowPassword(false);

  const { values, handleChange, resetValues } = useInput(initValueParams);

  const handleSubmit = () => {
    authApi.login(values)
      .then(() => {
        closePopup();
        openCompleteLogin();
      })
      .catch(console.log);
  };

  const handleRestore = () => {
    openRestore();
    closePopup();
  };

  useEffect(() => {
    if (isOpen) return;
    resetValues();
    resetShow();
  }, [isOpen]);

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
            name="email"
            type="text"
            placeholder="Логин"
            size="l"
            text="Латиница, цифры"
            onChange={handleChange}
            value={values.email}
            required
          />
          <Input
            name="password"
            type={isShow ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Пароль"
            size="l"
            text="От 10 символов, латиница, цифры, символы"
            onChange={handleChange}
            value={values.password}
            required
          >
            <button className="popup__button input-label__button input-label__button_type_password" onClick={handleShow} type="button">
              <IconPassword isVisiblePassword={isShow} />
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
