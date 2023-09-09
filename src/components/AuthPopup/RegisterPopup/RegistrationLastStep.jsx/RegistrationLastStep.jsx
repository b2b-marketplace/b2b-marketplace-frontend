import { Button } from "../../../UI/Button/Button";
import IconPassword from "../../../UI/Icon/IconPassword";
import Input from "../../Input/Input";
import LabelCheckbox from "../../LabelCheckbox/LabelCheckbox";
import PopupButton from "../../PopupButton/PopupButton";

const RegistrationLastStep = () => {
  return (
    <>
      <h2 className="popup__title">Финальный шаг</h2>
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
          <IconPassword isVisiblePassword={true} />
        </button>
      </Input>
      <Input
        labelClassName="input-label_type_repeat"
        name="repeat-password"
        type="password"
        autoComplete="off"
        placeholder="Повторите пароль"
        size="xxl"
        text="Пароли совпадают"
      >
        <button className="popup__button input-label__button input-label__button_type_password" type="button">
          <IconPassword isVisiblePassword={false} />
        </button>
      </Input>
      <div className="popup__terms">
        <LabelCheckbox id="terms" text="Я принимаю правила сайта" />

        <PopupButton type="button" className="popup__button popup__underlined-text">Познакомиться с правилами</PopupButton>
      </div>
      <Button
        size="l"
        type="submit"
        mode="secondary"
      >
        Зарегистрироваться
      </Button>
    </>
  );
};

export default RegistrationLastStep;
