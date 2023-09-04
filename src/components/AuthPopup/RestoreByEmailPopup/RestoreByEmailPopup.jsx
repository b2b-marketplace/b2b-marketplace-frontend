import RestorePopup from "../RestorePopup/RestorePopup";

const RestoreByEmailPopup = ({ isOpen, onClose, onSubmit }) => {
  return (
    <RestorePopup
      onSubmit={onSubmit}
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
