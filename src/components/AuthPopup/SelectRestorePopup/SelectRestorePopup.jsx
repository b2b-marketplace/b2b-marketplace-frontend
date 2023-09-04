import Popup from "../Popup";
import PopupButtons from "../PopupButtons/PopupButtons";

const SelectRestorePopup = ({ isOpen, onClose, onSelectType }) => {

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__contaoner">
        <h2 className="popup__title popup__title_restore">Выберите другой способ входа</h2>
        <PopupButtons
          onClick={onSelectType}
          value1="tel"
          value2="email"
          buttonText1="Войти по номеру телефона"
          buttonText2="Войти через почту"
        />

      </div>
    </Popup>
  );
};

export default SelectRestorePopup;
