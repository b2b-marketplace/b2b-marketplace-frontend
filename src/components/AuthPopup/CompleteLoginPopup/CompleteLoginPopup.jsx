import Popup from "../Popup";
import PopupCompleteParagraph from "../PopupCompleteParagraph/PopupCompleteParagraph";

const CompleteLoginPopup = ({ isOpen, onClose }) => {

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__container">
        <h2 className="popup__title popup__title_complete-login">Вход успешно выполнен</h2>

        <PopupCompleteParagraph className="popup__complete-paragraph_login">Через <span>5 секунд</span> вы попадете в личный кабинет</PopupCompleteParagraph>
      </div>
    </Popup>
  );
};

export default CompleteLoginPopup;
