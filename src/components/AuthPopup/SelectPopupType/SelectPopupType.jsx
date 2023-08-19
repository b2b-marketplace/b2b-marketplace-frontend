import IconYandex from "../../UI/Icon/IconYandex";
import IconVK from '../../UI/Icon/IconVK';
import IconGmail from '../../UI/Icon/IconGmail';
import { Button } from '../../UI/Button/Button';

const SelectPopupType = () => {
  return (
    <div className="popup__container">
      <h2 className="popup__title">Добро пожаловать!</h2>
      <p className="popup__subtitle">Войдите в личный кабинет и&nbsp;попробуйте&nbsp;больше возможностей сайта</p>
      <div className="popup__socials">
        <button className="popup__social">
          <IconYandex />
        </button>
        <button className="popup__social">
          <IconGmail />
        </button>
        <button className="popup__social">
          <IconVK />
        </button>
      </div>
      <div className="popup__buttons">
        <Button name="register" type="button" size="xxxxl">Зарегистрироваться</Button>
        <Button name="login" type="button" size="xxxxl">Войти</Button>
      </div>
    </div>
  );
};

export default SelectPopupType;
