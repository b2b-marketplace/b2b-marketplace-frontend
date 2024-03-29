import useShowPassword from '../../../../shared/hooks/useShowPassword';
import { passwordLength } from '../../../../shared/lib/authConstatnts';
import IconPassword from '../../../UI/Icon/IconPassword';
import Input from '../../Input/Input';
import LabelCheckbox from '../../LabelCheckbox/LabelCheckbox';
import PopupButton from '../../PopupButton/PopupButton';

const RegistrationLastStep = ({ onChange, values, errors, isDirtyInputs, serverErrors }) => {
  const { isShow, handleShow } = useShowPassword(false);
  const { isShow: isShowRepeat, handleShow: handleShowRepeat } = useShowPassword(false);

  const isPasswordsMatch = values.password === values.repeat_password;
  const showTerms = () => {
    window.open(`${window.location.origin}/portal-rules`, '_blank');
  };

  return (
    <>
      <Input
        name="password"
        type={isShow ? 'text' : 'password'}
        autoComplete="off"
        placeholder="Пароль"
        size="l"
        text={`От ${passwordLength} символов, латиница, цифры, символы`}
        onChange={onChange}
        value={values.password}
        minLength={passwordLength}
        required
        isNotError={!errors.password && isDirtyInputs.password}
        serverError={serverErrors.inn || ''}
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
        onChange={onChange}
        value={values.repeat_password}
        minLength={passwordLength}
        required
        isNotError={!errors.repeat_password && isPasswordsMatch && isDirtyInputs.repeat_password}
      >
        <button
          className="popup__button input-label__button input-label__button_type_password"
          onClick={handleShowRepeat}
          type="button"
        >
          <IconPassword isVisiblePassword={isShowRepeat} />
        </button>
      </Input>
      <div className="popup__terms">
        q
        <LabelCheckbox
          name="terms"
          id="terms"
          text="Я принимаю правила сайта"
          type="checkbox"
          checked={values.terms}
          onChange={onChange}
          required
        />
        <PopupButton
          type="button"
          onClick={showTerms}
          className="popup__button popup__underlined-text"
        >
          Познакомиться с правилами
        </PopupButton>
      </div>
    </>
  );
};

export default RegistrationLastStep;
