import usePopup from "../../../hooks/usePopup";
import Popup from "../Popup";
import PopupParagraph from "../PopupParagraph/PopupParagraph";

const CompleteLoginPopup = () => {
  const { isOpen, closePopup } = usePopup('completeLogin');

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Вход успешно выполнен"
    >
      <PopupParagraph className="popup__paragraph_center">
        Через
        <span>
          {` ${5} секунд `}
        </span>
        вы попадете в личный кабинет
      </PopupParagraph>
    </Popup>
  );
};

export default CompleteLoginPopup;
