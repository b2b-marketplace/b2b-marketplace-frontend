import { useEffect, useState } from "react";
import Popup from "../Popup";
import Form from "../Form/Form";
import RegistrationFirstStep from "./RegistrationFirstStep/RegistrationFirstStep";
import RegistrationSecondStep from "./RegistrationSecondStep/RegistrationSecondStep";
import RegistrationThirdStep from "./RegistrationThirdStep/RegistrationThirdStep.jsx";
import RegistrationLastStep from "./RegistrationLastStep.jsx/RegistrationLastStep";

const RegisterPopup = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [isEntity, setisEntity] = useState('');

  const handleType = (event) => {
    setUserType(event.target.value);
    handleNextStep();
  };

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };
  
  const handleEntity = (event) => {
    setisEntity(event.target.value);
    handleNextStep();
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setUserType('');
      setisEntity('');
    }
  }, [isOpen]);


  return (
    <Popup isOpen={isOpen} onClose={onClose} isShowStepper={true} step={step} >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
      >
        {
          step === 1 &&
          <RegistrationFirstStep onType={handleType} />
        }
        {
          step === 2 &&
          <RegistrationSecondStep onEntity={handleEntity} onNext={handleNextStep} />
        }
        {
          step === 3 &&
          <RegistrationThirdStep isEntity={isEntity} onNext={handleNextStep} />
        }
        {
          step === 4 &&
          <RegistrationLastStep />
        }
      </Form>
    </Popup>
  );
};

export default RegisterPopup;
