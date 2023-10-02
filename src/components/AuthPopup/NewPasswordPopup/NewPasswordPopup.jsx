import Input from '../Input/Input';
import Popup from '../Popup';
import IconPassword from '../../UI/Icon/IconPassword';
import Form from '../Form/Form';
import usePopup from '../../../hooks/usePopup';
import { passwordLength } from '../../../utils/authConstatnts';
import useShowPassword from '../../../hooks/useShowPassword';
import useInput from '../../../hooks/useInput';
import { useEffect } from 'react';

const NewPasswordPopup = () => {
  const { isOpen, closePopup } = usePopup('newPassword');
  const initValueParams = { repeat_password: '', password: '' };

  const { isShow, handleShow } = useShowPassword(false);
  const { isShow: isShowRepeat, handleShow: handleShowRepeat } = useShowPassword(false);

  const { errors, values, handleChange, resetValues, isDirtyInputs, isNotValidForm } =
    useInput(initValueParams);

  const isPasswordsMatch = values.password === values.repeat_password;

  useEffect(() => {
    if (isOpen) return;
    resetValues();
  }, [isOpen]);

  const handleSubmit = () => {
    closePopup();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Придумайте новый пароль"
      popupContClassMode={'popup__container_type_form'}
    >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        btnText="Сохранить"
        btnType="submit"
        formDisabled={isNotValidForm}
      >
        <fieldset className="popup__fieldset">
          <Input
            name="password"
            type={isShow ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Пароль"
            size="l"
            text={`От ${passwordLength} символов, латиница, цифры, символы`}
            onChange={handleChange}
            value={values.password}
            minLength={passwordLength}
            required
            isNotError={!errors.password && isDirtyInputs.password}
          >
            <button
              className="popup__button input-label__button input-label__button_type_password"
              onClick={handleShow}
              type="button"
            >
              <IconPassword isVisiblePassword={isShow} />
            </button>
          </Input>
          <Input
            labelClassName="input-label_type_repeat"
            name="repeat_password"
            type={isShowRepeat ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Повторите пароль"
            size="l"
            text="Пароли совпадают"
            onChange={handleChange}
            value={values.repeat_password}
            minLength={passwordLength}
            required
            isNotError={
              !errors.repeat_password && isPasswordsMatch && isDirtyInputs.repeat_password
            }
          >
            <button
              className="popup__button input-label__button input-label__button_type_password"
              onClick={handleShowRepeat}
              type="button"
            >
              <IconPassword isVisiblePassword={isShowRepeat} />
            </button>
          </Input>
        </fieldset>
      </Form>
    </Popup>
  );
};

export default NewPasswordPopup;
