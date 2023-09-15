import { useEffect, useState } from 'react';
import Popup from '../Popup';
import Form from '../Form/Form';
import RegistrationFirstStep from './RegistrationFirstStep/RegistrationFirstStep';
import RegistrationSecondStep from './RegistrationSecondStep/RegistrationSecondStep';
import RegistrationThirdStep from './RegistrationThirdStep/RegistrationThirdStep';
import RegistrationLastStep from './RegistrationLastStep.jsx/RegistrationLastStep';
import usePopup from '../../../hooks/usePopup';
import authApi from '../../../utils/authApi';
import useInput from '../../../hooks/useInput';

const RegisterPopup = () => {
  const { isOpen, closePopup } = usePopup('registration');
  const { openPopup: openCompleteRegistration } = usePopup('completeRegistration');
  const [step, setStep] = useState(1);
  const [isEntity, setisEntity] = useState(false);
  const initValueParams = {
    email: '',
    password: '',
    repeat_password: '',
    role: '',
    name: '',
    inn: '',
    phone_number: '',
    address: '',
    vat: ''
  };
  
  const { values, handleChange, resetValues } = useInput(initValueParams);

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

  const handleNextStep = (event) => {
    event?.preventDefault && event.preventDefault();
    setStep(step + 1);
  };

  const handleType = (event) => {
    handleChange(event);
    handleNextStep();
  };

  const handleEntity = (event) => {
    setisEntity(event.target.value === 'yes');
    handleNextStep();
  };

  const handleSubmit = () => {
    if (step === 3) return handleNextStep();

    const { password, repeat_password, email, ...company} = values;
    authApi.registerCompany({ email, password, company: { ...company, vat: company.vat === 'yes' }, })
      .then((res) => {
        closePopup();
        openCompleteRegistration();
      }).catch(console.log);
  };

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      resetValues();
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
        btnType="submit"
      // btnOnClick={step === 4 ? undefined : handleNextStep}
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
            <RegistrationThirdStep values={values} onChange={handleChange} isEntity={isEntity} />
          }
          {
            step === 4 &&
            <RegistrationLastStep values={values} onChange={handleChange} />
          }
        </fieldset>
      </Form>
    </Popup>
  );
};

export default RegisterPopup;
