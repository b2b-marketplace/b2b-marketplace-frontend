import Popup from "../Popup";
import PopupButtons from "../PopupButtons/PopupButtons";

const SelectRestorePopup = ({ isOpen, onClose, onSelectType }) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Выберите другой способ входа"
    >
      <PopupButtons
        onClick={onSelectType}
        value1="email"
        value2="tel"
        mode1="secondary"
        buttonText1="Через почту"
        buttonText2="По телефону"
      />

    </Popup>
  );
};

export default SelectRestorePopup;
