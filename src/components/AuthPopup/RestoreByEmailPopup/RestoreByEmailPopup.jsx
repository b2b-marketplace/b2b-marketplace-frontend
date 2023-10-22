import { useEffect, useState } from 'react';

import RestorePopup from '../RestorePopup/RestorePopup';
import useRestore from '../../../shared/hooks/useRestore';
import usePopup from '../../../shared/hooks/usePopup';
import useInput from '../../../shared/hooks/useInput';
import useError from '../../../shared/hooks/useError';
import authApi from '../../../shared/api/authApi';

const RestoreByEmailPopup = () => {
  const { isOpen, closePopup } = usePopup('restoreByEmail');
  const { openPopup: openConfirm } = usePopup('confirmRestoreByEmail');

  const { openPopup: openError } = usePopup('error');
  const { showError } = useError();

  const { setType } = useRestore('email');
  const initValueParams = { email: '' };
  const { errors, values, handleChange, resetValues, isDirtyInputs, isNotValidForm } =
    useInput(initValueParams);
  const [isRequesting, setIsRequesting] = useState(false);
  const [serverErrors, setServerErrors] = useState({});

  const handleSubmit = () => {
    setIsRequesting(true);
    authApi
      .restoreByEmail(values)
      .then(() => {
        closePopup();
        openConfirm();
        setType(values.email);
      })
      .catch(({ messages, errCode }) => {
        if (errCode !== 400) {
          showError(errCode ? messages : 'Сервер не доступен');
          openError();
          return;
        }
        setServerErrors(messages);
      })
      .finally(() => setIsRequesting(false));
  };

  useEffect(() => {
    if (isOpen) {
      return;
    }
    setServerErrors({});
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
      serverError={serverErrors.email}
    />
  );
};

export default RestoreByEmailPopup;
