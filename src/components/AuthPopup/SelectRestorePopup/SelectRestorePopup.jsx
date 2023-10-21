import PopupButtons from '../PopupButtons/PopupButtons';
import Popup from '../Popup';
import usePopup from '../../../shared/hooks/usePopup';

const SelectRestorePopup = () => {
  const { isOpen, closePopup } = usePopup('selectRestore');
  const { openPopup: openRestoreByPhone } = usePopup('restoreByPhone');
  const { openPopup: openRestoreByEmail } = usePopup('restoreByEmail');

  const handleOpenRestorePopup = (event) => {
    if (event.target.value === 'email') {
      closePopup();
      openRestoreByEmail();
    }
    if (event.target.value === 'tel') {
      closePopup();
      openRestoreByPhone();
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={closePopup} title="Выберите другой способ входа">
      <PopupButtons
        onClick={handleOpenRestorePopup}
        value1="email"
        value2="tel"
        dark1
        buttonText1="Через почту"
        buttonText2="По телефону"
      />
    </Popup>
  );
};

export default SelectRestorePopup;
