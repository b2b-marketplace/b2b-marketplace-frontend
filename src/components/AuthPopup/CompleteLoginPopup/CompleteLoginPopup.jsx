import Popup from "../Popup";
import PopupCompleteParagraph from "../PopupCompleteParagraph/PopupCompleteParagraph";

const CompleteLoginPopup = ({ isOpen, onClose }) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Вход успешно выполнен"
    >
      <PopupCompleteParagraph className="popup__complete-paragraph_center">Через <span>5 секунд</span> вы попадете в личный кабинет</PopupCompleteParagraph>
    </Popup>
  );
};

export default CompleteLoginPopup;
