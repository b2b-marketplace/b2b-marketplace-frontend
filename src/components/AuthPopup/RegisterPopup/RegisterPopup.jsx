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
  const [isEntity, setisEntity] = useState(false);

  const fieldsetHeight = step === 3 ? '420px' : step === 4 ? '325px' : '0';

  const formParams = [
    { title: 'Укажите, кто вы', },
    { title: 'Вы юридическое лицо?', },
    { title: isEntity ? 'Укажите данные организации' : 'Укажите свои данные', btnText: 'Далее' },
    { title: 'Финальный шаг', btnText: 'Зарегистрироваться' },
  ];

  const handleType = (event) => {
    setUserType(event.target.value);
    handleNextStep();
  };

  const handleSubmit = () => {
    onClose();
    onSubmit && onSubmit();
  };

  const handleEntity = (event) => {
    setisEntity(event.target.value === 'yes');
    handleNextStep();
  };

  const handleNextStep = (event) => {
    event?.preventDefault && event.preventDefault();
    setStep(step + 1);
  };

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setUserType('');
      setisEntity(false);
    }
  }, [isOpen]);

  return (
    <Popup isOpen={isOpen} onClose={onClose} isShowStepper={true} step={step} anim={step > 2}>
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        title={formParams[step - 1].title}
        btnText={formParams[step - 1].btnText}
        btnType={step === 4 ? 'submit' : 'button'}
        btnOnClick={step === 4 ? undefined : handleNextStep}
      >
        {
          step === 1 &&
          <RegistrationFirstStep onType={handleType} />
        }
        {
          step === 2 &&
          <RegistrationSecondStep onEntity={handleEntity} />
        }

        <fieldset style={{'height': fieldsetHeight}} className={`popup__fieldset popup__fieldset_hidden${step > 2 ? ` popup__fieldset_visible` : ''}`}>
          {
            step === 3 &&
            <RegistrationThirdStep isEntity={isEntity} />
          }
          {
            step === 4 &&
            <RegistrationLastStep />
          }
        </fieldset>
      </Form>
    </Popup>
  );
};

export default RegisterPopup;
