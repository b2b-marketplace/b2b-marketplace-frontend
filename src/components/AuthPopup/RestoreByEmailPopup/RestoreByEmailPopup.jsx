import usePopup from "../../../hooks/usePopup";
import RestorePopup from "../RestorePopup/RestorePopup";

const RestoreByEmailPopup = () => {
  const { isOpen, closePopup } = usePopup('restoreByEmail');
  const { openPopup: openConfirm } = usePopup('confirmRestoreByEmail');
  
  const handleSubmit = () => {
    closePopup();
    openConfirm();
  };

  return (
    <RestorePopup
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={closePopup}
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
