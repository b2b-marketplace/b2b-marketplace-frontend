import PopupButtons from '../PopupButtons/PopupButtons';
import Popup from '../Popup';
import IconYandex from '../../UI/Icon/IconYandex';
import IconVK from '../../UI/Icon/IconVK';
import IconGmail from '../../UI/Icon/IconGmail';
import usePopup from '../../../shared/hooks/usePopup';

const SelectPopup = () => {
  const { isOpen, closePopup } = usePopup('select');
  const { openPopup: openRegistration } = usePopup('registration');
  const { openPopup: openLogin } = usePopup('login');

  const handleSelectPopup = (event) => {
    if (event.target.value === 'registration') {
      closePopup();
      openRegistration();
    }
    if (event.target.value === 'login') {
      closePopup();
      openLogin();
    }
  };
  return (
    <Popup isOpen={isOpen} onClose={closePopup}>
      <div className="popup__container">
        <div className="popup__titles">
          <h2 className="popup__title">Добро пожаловать!</h2>
          <p className="popup__subtitle">
            Войдите в личный кабинет и&nbsp;попробуйте&nbsp;больше возможностей сайта
          </p>
        </div>
        <div className="popup__socials">
          <button className="popup__social" type="button">
            <IconYandex />
          </button>
          <button className="popup__social" type="button">
            <IconGmail />
          </button>
          <button className="popup__social" type="button">
            <IconVK />
          </button>
        </div>
        <PopupButtons
          onClick={handleSelectPopup}
          value1="registration"
          value2="login"
          mode1="secondary"
          buttonText1="Зарегистрироваться"
          buttonText2="Войти"
        />
      </div>
    </Popup>
  );
};

export default SelectPopup;
