import RestorePopup from "../RestorePopup/RestorePopup";

const RestoreByPhonePopup = ({ isOpen, onClose, onSubmit }) => {
  
  return (
    <RestorePopup
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Укажите номер телефона, к&nbsp;которому привязан аккаунт"
      inputType="tel"
      inputPlaceholder="+7"
      inputCaption="Без дефисов и пробелов"
      inputName="tel"
      text="Номер телефона без дефисов"
    />
  );
};

export default RestoreByPhonePopup;
