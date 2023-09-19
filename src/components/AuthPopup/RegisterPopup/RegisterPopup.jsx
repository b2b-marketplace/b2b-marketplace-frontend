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
  const [role, setRole] = useState('');

  const initEntityValueParams = {
    email: '',
    name: '',
    inn: '',
    phone_number: '',
    address: '',
    vat: ''
  };
  const initPersonValueParams = {
    first_name: '',
    name: '',
    phone_number: '',
    email: '',
    address: '',
  };
  const initLastParams = {
    password: '',
    repeat_password: '',
  };

  const entityValidation = useInput(initEntityValueParams);
  const personValidation = useInput(initPersonValueParams);
  const lastStepValidation = useInput(initLastParams);
  const currentValidation = isEntity ? entityValidation : personValidation;
  
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

  const isPasswordsMatch = lastStepValidation.values.password === lastStepValidation.values.repeat_password;

  const formDisabled = step === 4 ?
    lastStepValidation.isNotValidForm || !isPasswordsMatch
    : currentValidation.isNotValidForm;

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleType = ({ target }) => {
    setRole(target.value);
    handleNextStep();
  };

  const handleEntity = (event) => {
    setisEntity(event.target.value === 'yes');
    handleNextStep();
  };

  const handleSubmit = () => {
    if (step === 3) return handleNextStep();
    if (!isEntity) {
      closePopup();
      openCompleteRegistration();
      return;
    }

    const { email, phone_number, address, ...company } = entityValidation.values;
    const { password } = lastStepValidation.values;
    authApi.registerCompany({
      email,
      password,
      // FIXME: just for presentation
      // username: `test-name-${Math.floor(Math.random() * 1000000)}`,
      username: email,
      company: {
        ...company,
        role,
        vat: company.vat === 'yes',
        phone_number: {
          phone_number
        },
        address: {
          address,
        },
      },
    })
      .then((res) => {
        closePopup();
        openCompleteRegistration();
      }).catch(console.log);
  };

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      entityValidation.resetValues();
      personValidation.resetValues();
      lastStepValidation.resetValues();
      setisEntity(false);
      setRole('');
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
        formDisabled={formDisabled}
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
            <RegistrationThirdStep
              isEntity={isEntity}
              errors={currentValidation.errors}
              values={currentValidation.values}
              onChange={currentValidation.handleChange}
              isDirtyInputs={currentValidation.isDirtyInputs}
            />
          }
          {
            step === 4 &&
            <RegistrationLastStep
              errors={lastStepValidation.errors}
              values={lastStepValidation.values}
              onChange={lastStepValidation.handleChange}
              isDirtyInputs={lastStepValidation.isDirtyInputs}
            />
          }
        </fieldset>
      </Form>
    </Popup>
  );
};

export default RegisterPopup;
