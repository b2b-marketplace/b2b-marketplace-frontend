import usePopup from '../../../shared/hooks/hooks/usePopup';
import Popup from '../Popup';
import RegistrationOpportunity from './RegistrationOpportunity/RegistrationOpportunity';

const CompleteRegistrationPopup = () => {
  const { isOpen, closePopup } = usePopup('completeRegistration');

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Чтобы завершить регистрацию перейдите по ссылке, которую прислали на указанную почту"
    >
      <ul className="popup__regiter-opportunities">
        <RegistrationOpportunity>Добавить объявление вы можете бесплатно</RegistrationOpportunity>
        <RegistrationOpportunity>
          Количество предложений, которое можете добавить на покупку/продажу не ограничено
        </RegistrationOpportunity>
        <RegistrationOpportunity>Все новые объявления проходят модерацию</RegistrationOpportunity>
        <RegistrationOpportunity>Безопасные сделки на платформе</RegistrationOpportunity>
      </ul>
    </Popup>
  );
};

export default CompleteRegistrationPopup;
