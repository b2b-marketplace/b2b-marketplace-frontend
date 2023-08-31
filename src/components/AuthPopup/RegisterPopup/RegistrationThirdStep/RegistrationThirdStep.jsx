import { Link } from "react-router-dom";
import { Button } from "../../../UI/Button/Button";
import IconPassword from "../../../UI/Icon/IconPassword";
import Input from "../../Input/Input";
import LabelCheckbox from "../../LabelCheckbox/LabelCheckbox";

const RegistrationThirdStep = () => {
  return (
    <>
      <h2 className="popup__title">Финальный шаг</h2>
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
      <div className="popup__terms">
        <LabelCheckbox id="terms" text="Я принимаю правила сайта" />
        <Link className="popup__terms-link">Познакомиться с правилами</Link>
      </div>
      <Button
        className="popup__submit"
        size={'xxxl'}
        type="submit"
      >
        Завершить регистрацию
      </Button>
    </>
  );
};

export default RegistrationThirdStep;
