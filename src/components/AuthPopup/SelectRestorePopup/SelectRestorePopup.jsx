import Popup from "../Popup";
import PopupButtons from "../PopupButtons/PopupButtons";

const SelectRestorePopup = ({ isOpen, onClose, onSelectType }) => {

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__container">
        <h2 className="popup__title">Выберите другой способ входа</h2>
        <PopupButtons
          onClick={onSelectType}
          value1="email"
          value2="tel"
          mode1="secondary"
          buttonText1="Через почту"
          buttonText2="По телефону"
        />

      </div>
    </Popup>
  );
};

export default SelectRestorePopup;
