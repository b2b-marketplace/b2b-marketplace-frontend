import RestorePopup from "../RestorePopup/RestorePopup";

const RestoreByPhonePopup = ({ isOpen, onClose, onSubmit }) => {
  
  return (
    <RestorePopup
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Укажите номер телефона, который привязан к аккаунту"
      inputType="tel"
      inputPlaceholder="+7"
      inputCaption="Без дефисов и пробелов"
    />
  );
};

export default RestoreByPhonePopup;