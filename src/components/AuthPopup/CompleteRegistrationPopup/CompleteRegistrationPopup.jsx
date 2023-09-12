import Popup from "../Popup";
import RegistrationOpportunity from "./RegistrationOpportunity/RegistrationOpportunity";

const CompleteRegistrationPopup = ({ isOpen, onClose }) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Чтобы завершить регистрацию перейдите по ссылке, которую прислали на указанную почту">
      <ul className="popup__regiter-opportunities">
        <RegistrationOpportunity>Добавить объявление вы можете бесплатно</RegistrationOpportunity>
        <RegistrationOpportunity>Количество предложений, которое можете добавить на покупку/продажу не ограничено</RegistrationOpportunity>
        <RegistrationOpportunity>Все новые объявления проходят модерацию</RegistrationOpportunity>
        <RegistrationOpportunity>Безопасные сделки на платформе</RegistrationOpportunity>
      </ul>
    </Popup>
  );
};

export default CompleteRegistrationPopup;
