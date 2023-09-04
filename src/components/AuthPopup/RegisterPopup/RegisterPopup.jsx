import { useEffect, useState } from "react";
import Popup from "../Popup";
import RegistrationFirstStep from "./RegistrationFirstStep/RegistrationFirstStep";
import Stepper from "../Stepper/Stepper";
import Form from "../Form/Form";
import RegistrationSecondStep from "./RegistrationSecondStep/RegistrationSecondStep";
import RegistrationThirdStep from "./RegistrationThirdStep/RegistrationThirdStep";

const RegisterPopup = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [isEntity, setisEntity] = useState(false);

  const handleType = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  const handleNextStep = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleEntity = () => setisEntity(!isEntity);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setisEntity(false);
    }
  }, [isOpen]);


  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Stepper step={step} />
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
      >
        {
          step === 1 &&
            <RegistrationFirstStep onNext={handleNextStep} isEntity={isEntity} onEntity={handleEntity} userType={userType} onType={handleType} />
        }
        {
          step === 2 && 
            <RegistrationSecondStep isEntity={isEntity} onNext={handleNextStep} />
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
