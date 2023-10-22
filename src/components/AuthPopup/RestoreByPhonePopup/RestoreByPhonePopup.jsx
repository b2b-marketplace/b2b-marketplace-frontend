import RestorePopup from '../RestorePopup/RestorePopup';
import usePopup from '../../../shared/hooks/usePopup';

const RestoreByPhonePopup = () => {
  const { isOpen, closePopup } = usePopup('restoreByPhone');
  const { openPopup: openConfirm } = usePopup('confirmRestoreByPhone');

  const handleSubmit = () => {
    closePopup();
    openConfirm();
  };

  return (
    <RestorePopup
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={closePopup}
      title="Укажите номер телефона, к&nbsp;которому привязан аккаунт"
      titleClassMode="popup__title_size_s"
      inputType="tel"
      inputPlaceholder="+7"
      inputName="tel"
      text="Номер телефона без дефисов"
    />
  );
};

export default RestoreByPhonePopup;
