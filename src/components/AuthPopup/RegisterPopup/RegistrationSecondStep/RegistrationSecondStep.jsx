import PopupButtons from '../../PopupButtons/PopupButtons';

const RegistrationSecondStep = ({ onEntity }) => {
  return (
    <PopupButtons
      className="popup__buttons_form"
      onClick={onEntity}
      value1="yes"
      value2="no"
      dark1
      buttonText1="Да"
      buttonText2="Нет"
      disabled1={false}
      disabled2
    />
  );
};

export default RegistrationSecondStep;
