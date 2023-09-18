import PopupButtons from "../../PopupButtons/PopupButtons";

const RegistrationFirstStep = ({ onType }) => {
  return (
    <PopupButtons
      className="popup__buttons_form"
      onClick={onType}
      value1="supplier"
      value2="customer"
      dark1={true}
      buttonText1="Я поставщик"
      buttonText2="Я покупатель"
      name={'role'}
    />
  );
};

export default RegistrationFirstStep;
