
import Input from "../Input/Input";
import Popup from "../Popup";
import IconPassword from "../../UI/Icon/IconPassword";
import Form from "../Form/Form";
import usePopup from "../../../hooks/usePopup";

const NewPasswordPopup = () => {
  
  const { isOpen, closePopup } = usePopup('newPassword');
  
  const handleSubmit = () => {
    closePopup();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Придумайте новый пароль"
      popupContClassMode={'popup__container_type_form'}
    >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        btnText="Сохранить"
        btnType="submit"
      >
        <fieldset className="popup__fieldset">
          <Input
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Пароль"
            size="l"
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
            size="l"
            text="Пароли совпадают"
          >
            <button className="popup__button input-label__button input-label__button_type_password" type="button">
              <IconPassword isVisiblePassword={false} />
            </button>
          </Input>
        </fieldset>
      </Form>
    </Popup >
  );
};

export default NewPasswordPopup;
