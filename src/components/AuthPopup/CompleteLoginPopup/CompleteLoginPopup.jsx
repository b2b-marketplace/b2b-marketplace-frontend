import { useEffect, useState } from "react";
import usePopup from "../../../hooks/usePopup";
import Popup from "../Popup";
import PopupParagraph from "../PopupParagraph/PopupParagraph";
import { useNavigate } from "react-router-dom";

const CompleteLoginPopup = () => {
  const { isOpen, closePopup } = usePopup('completeLogin');
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      let secs = 5;

      const coutDown = () => {
        if (secs <= 0) {
          clearInterval(timer);
          navigate('/account/profile');
          closePopup();
          return;
        }
        secs = secs - 1;
        setSeconds(secs);
      };
      const timer = setInterval(coutDown, 1000);
    }
  }, [isOpen]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Вход успешно выполнен"
    >
      <PopupParagraph className="popup__paragraph_center">
        Через
        <span>
          {` ${seconds} секунд `}
        </span>
        вы попадете в личный кабинет
      </PopupParagraph>
    </Popup>
  );
};

export default CompleteLoginPopup;
