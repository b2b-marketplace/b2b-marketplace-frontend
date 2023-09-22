import { useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import usePopup from '../../../hooks/usePopup';
import RestorePopup from '../RestorePopup/RestorePopup';
import authApi from '../../../utils/authApi';
import useRestore from '../../../hooks/useRestore';

const RestoreByEmailPopup = () => {
  const { isOpen, closePopup } = usePopup('restoreByEmail');
  const { openPopup: openConfirm } = usePopup('confirmRestoreByEmail');
  const { setType } = useRestore('email');
  const initValueParams = { email: '' };
  const { errors, values, handleChange, resetValues, isDirtyInputs, isNotValidForm } = useInput(initValueParams);
  const [isRequesting, setIsRequesting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setIsRequesting(true);
    authApi.restoreByEmail(values)
      .then(() => {
        closePopup();
        openConfirm();
        setType(values.email);
      })
      .catch(setError)
      .finally(() => setIsRequesting(false));
  };

  useEffect(() => {
    if (isOpen) {
      return;
    }
    setError('');
    resetValues();
  }, [isOpen]);

  return (
    <RestorePopup
      onSubmit={handleSubmit}
      formDisabled={isNotValidForm || isRequesting}
      isOpen={isOpen}
      onClose={closePopup}
      title="Укажите почту, к который привязан аккаунт"
      titleClassMode="popup__title_size_s"
      inputType="email"
      inputName="email"
      inputPlaceholder="box@mail.ru"
      text="Почта"
      onChange={handleChange}
      value={values.email}
      maxLength={254}
      required
      isNotError={!errors.email && isDirtyInputs.email}
      serverError={error}
    />
  );
};

export default RestoreByEmailPopup;
