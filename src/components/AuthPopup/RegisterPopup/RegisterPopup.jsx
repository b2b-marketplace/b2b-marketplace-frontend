import { useEffect, useState } from "react";
import Popup from "../Popup";
import RegistrationFirstStep from "./RegistrationFirstStep/RegistrationFirstStep";
import Stepper from "../Stepper/Stepper";
import Form from "../Form/Form";
import RegistrationSecondStep from "./RegistrationSecondStep/RegistrationSecondStep";
import RegistrationThirdStep from "./RegistrationThirdStep/RegistrationThirdStep";

const RegisterPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');

  const handleType = (event) => {
    setUserType(event.target.value);
  };

  const handleNextStep = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };


  useEffect(() => {
    if (!isOpen) {
      setStep(1);
    }
  }, [isOpen]);


  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Stepper step={step} />
      <Form
        className="popup__form"
        submitText={'Завершить регистрацию'}
      >
        {
          step === 1 &&
            <RegistrationFirstStep onNext={handleNextStep} userType={userType} onType={handleType} />
        }
        {
          step === 2 &&
            <RegistrationSecondStep onNext={handleNextStep} />
        }
        {
          step === 3 &&
            <RegistrationThirdStep />
        }
      </Form>
    </Popup>
  );
};

export default RegisterPopup;
