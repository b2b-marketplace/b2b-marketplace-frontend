import LabelCheckbox from "../../LabelCheckbox/LabelCheckbox";
import NextButton from "../../NextButton/NextButton";
import PopupButtons from "../../PopupButtons/PopupButtons";

const RegistrationFirstStep = ({ onType, userType, onNext }) => {
  return (
    <>
      <h2 className="popup__title">Укажите, кто вы</h2>
      <PopupButtons
        className="popup__buttons_form"
        onClick={onType}
        value1="contractor"
        value2="customer"
        primary1={userType === 'contractor'}
        primary2={userType === 'customer'}
        buttonText1="Я поставщик/производитель"
        buttonText2="Я покупатель"
      />
      <LabelCheckbox id="entity" text="Я юридическое лицо" />
      <NextButton onNext={onNext}/>
    </>
  );
};

export default RegistrationFirstStep;
