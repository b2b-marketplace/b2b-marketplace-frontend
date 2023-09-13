import { useEffect, useState } from 'react';
import Popup from '../Popup';
import Form from '../Form/Form';
import RegistrationFirstStep from './RegistrationFirstStep/RegistrationFirstStep';
import RegistrationSecondStep from './RegistrationSecondStep/RegistrationSecondStep';
import RegistrationThirdStep from './RegistrationThirdStep/RegistrationThirdStep.jsx';
import RegistrationLastStep from './RegistrationLastStep.jsx/RegistrationLastStep';
import usePopup from '../../../hooks/usePopup';

const RegisterPopup = () => {
  const { isOpen, closePopup } = usePopup('registration');
  const { openPopup: openCompleteRegistration } = usePopup('completeRegistration');

  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [isEntity, setisEntity] = useState(false);

  const fieldsetHeight = step === 3
    ? isEntity
      ? '420px'
      : '304px'
    : step === 4
      ? '246px'
      : '0';

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
    closePopup();
    openCompleteRegistration();
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
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      isShowStepper={true}
      step={step}
      anim={step > 2}
      title={formParams[step - 1].title}
      popupContClassMode={step < 3 ? '' : 'popup__container_type_form'}
    >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
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

        <fieldset style={{ 'height': fieldsetHeight }} className={`popup__fieldset popup__fieldset_hidden${step > 2 ? ` popup__fieldset_visible` : ''}`}>
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
