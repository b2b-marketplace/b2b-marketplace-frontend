import RestorePopup from "../RestorePopup/RestorePopup";

const RestoreByEmailPopup = ({ isOpen, onClose, onSubmit }) => {
  return (
    <RestorePopup
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Укажите почту, к который привязан аккаунт"
      titleClassMode='popup__title_size_s'
      inputType="email"
      inputName="email"
      inputPlaceholder="box@mail.ru"
      inputCaption="Без дефисов и пробелов"
      text="Почта"
    />
  );
};

export default RestoreByEmailPopup;
