import Form from "../Form/Form";
import Popup from "../Popup";
import PopupButtons from "../PopupButtons/PopupButtons";

const SelectRestorePopup = ({ isOpen, onClose, onSubmit, onSelectType }) => {

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Form
        className="popup__form"
        submitText={'Завершить регистрацию'}
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title">Выберите другой способ входа</h2>
        <PopupButtons
          onClick={onSelectType}
          value1="tel"
          value2="email"
          buttonText1="Войти по номеру телефона"
          buttonText2="Войти через почту"
        />

      </Form>
    </Popup>
  );
};

export default SelectRestorePopup;
