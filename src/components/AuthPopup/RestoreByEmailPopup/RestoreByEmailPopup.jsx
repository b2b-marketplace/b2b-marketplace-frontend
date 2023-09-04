import RestorePopup from "../RestorePopup/RestorePopup";

const RestoreByEmailPopup = ({ isOpen, onClose }) => {
  return (
    <RestorePopup
      isOpen={isOpen}
      onClose={onClose}
      title="Укажите почту, к который привязан аккаунт"
      inputType="email"
      inputPlaceholder="Почта"
      inputCaption=""
    />
  );
};

export default RestoreByEmailPopup;
