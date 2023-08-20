import { useEffect, useState } from "react";
import IconNext from "../../UI/Icon/IconNext";
import Popup from "../Popup";
import RegistrationFirstStep from "./RegistrationFirstStep/RegistrationFirstStep";
import Stepper from "../Stepper/Stepper";
import Form from "../Form/Form";

const RegisterPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');

  const nextButtonClassName = `popup__button popup__next${step === 3 ? ' popup__next_hidden' : ''}`;

  const handleType = (event) => {
    setUserType(event.target.value);
  };
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
    }
  }, [isOpen]);


  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Form
        className="popup__form"
        isVisibleSubmit={step !== 3}
        submitText={'Завершить регистрацию'}
      >
        <Stepper step={step} />
        <RegistrationFirstStep userType={userType} onType={handleType} />
      </Form>
      <button className={nextButtonClassName} onClick={handleNextStep}>
        <IconNext />
      </button>
    </Popup>
  );
};

export default RegisterPopup;
