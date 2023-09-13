import IconPassword from "../../../UI/Icon/IconPassword";
import Input from "../../Input/Input";
import LabelCheckbox from "../../LabelCheckbox/LabelCheckbox";
import PopupButton from "../../PopupButton/PopupButton";

const RegistrationLastStep = () => {
  return (
    <>
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
      <div className="popup__terms">
        <LabelCheckbox type="checkbox" name="terms" id="terms" text="Я принимаю правила сайта" />

        <PopupButton type="button" className="popup__button popup__underlined-text">Познакомиться с правилами</PopupButton>
      </div>
    </>
  );
};

export default RegistrationLastStep;
