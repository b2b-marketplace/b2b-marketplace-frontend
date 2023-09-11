import PopupButtons from "../../PopupButtons/PopupButtons";

const RegistrationFirstStep = ({ onType }) => {
  return (
    <PopupButtons
      className="popup__buttons_form"
      onClick={onType}
      value1="contractor"
      value2="customer"
      mode1="secondary"
      buttonText1="Я поставщик"
      buttonText2="Я покупатель"
    />
  );
};

export default RegistrationFirstStep;
