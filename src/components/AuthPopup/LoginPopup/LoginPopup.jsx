import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import usePopup from '../../../hooks/usePopup';
import IconPassword from '../../UI/Icon/IconPassword';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Popup from '../Popup';
import PopupButton from '../PopupButton/PopupButton';
import useShowPassword from '../../../hooks/useShowPassword';
import { loginUser, resetLoading } from '../../../store/slices/authSlice';

const LoginPopup = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

  const { isOpen, closePopup } = usePopup('login');
  const { openPopup: openCompleteLogin } = usePopup('completeLogin');
  const { openPopup: openRestore } = usePopup('selectRestore');

  const initValueParams = { email: '', password: '' };
  const { isShow, handleShow, resetShow } = useShowPassword(false);

  const { errors, values, handleChange, resetValues, isDirtyInputs, isNotValidForm } =
    useInput(initValueParams);

  const handleSubmit = () => {
    dispatch(loginUser(values));
  };

  const handleRestore = () => {
    openRestore();
    closePopup();
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(resetLoading());
      return;
    }
    resetValues();
    resetShow();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (!isLoggedIn) return;
    closePopup();
    openCompleteLogin();
  }, [isLoggedIn]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title="Вход"
      popupContClassMode={'popup__container_type_form'}
    >
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        btnText="Далее"
        btnType={'submit'}
        formDisabled={isNotValidForm || isLoading}
      >
        <fieldset className="popup__fieldset">
          <Input
            name="email"
            type="email"
            placeholder="box@mail.ru"
            size="l"
            text="Почта"
            onChange={handleChange}
            value={values.email}
            maxLength={254}
            required
            isNotError={!errors.email && isDirtyInputs.email}
          />
          <Input
            name="password"
            type={isShow ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Пароль"
            size="l"
            text="От 10 символов, латиница, цифры, символы"
            onChange={handleChange}
            value={values.password}
            minLength={10}
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
          <PopupButton
            type="button"
            className="popup__button popup__underlined-text"
            onClick={handleRestore}
          >
            Забыл логин/пароль
          </PopupButton>
        </fieldset>
      </Form>
    </Popup>
  );
};

export default LoginPopup;
