import IconYandex from "../../UI/Icon/IconYandex";
import IconVK from '../../UI/Icon/IconVK';
import IconGmail from '../../UI/Icon/IconGmail';
import { Button } from '../../UI/Button/Button';
import Popup from "../Popup";

const SelectPopup = ({ onSelectType, isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
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
          <Button value="register" onClick={onSelectType} type="button" size="xxxxl">Зарегистрироваться</Button>
          <Button value="login" onClick={onSelectType} type="button" size="xxxxl">Войти</Button>
        </div>
      </div>
    </Popup>
  );
};

export default SelectPopup;
