import PopupButtons from "../../PopupButtons/PopupButtons";

const RegistrationFirstStep = ({ onType, userType }) => {
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
      <label className="popup__label" htmlFor="entity">
        <input id="entity" type="checkbox" className="popup__checkbox" />
        <span className="popup__checkbox-span">Я юридическое лицо</span>
      </label>
    </>
  );
};

export default RegistrationFirstStep;
