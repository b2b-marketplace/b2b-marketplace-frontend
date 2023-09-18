import { useEffect } from 'react';
import useInput from '../../../../../hooks/useInput';
import Input from '../../../Input/Input';
import LabelCheckbox from '../../../LabelCheckbox/LabelCheckbox';
const options = [
  { value: 'moscow', label: 'Московская Область' },
  { value: 'Spb', label: 'Ленинградская Область' },
  { value: 'newCity', label: 'Новгородская Область' },
  { value: 'HowkCity', label: 'Орловская Область' },
];

const EntityRegistration = ({ onFormChange }) => {

  const initValueParams = {
    email: '',
    name: '',
    inn: '',
    phone_number: '',
    address: '',
    vat: ''
  };

  const { errors, values, handleChange, isDirtyInputs, isNotValidForm} = useInput(initValueParams);

  const onChange = (event) => {
    handleChange(event);
  };

  useEffect(() => onFormChange(values, isNotValidForm), [values, isNotValidForm]);

  return (
    <>
      <Input
        name="name"
        type="text"
        placeholder="ОАО «Компания»"
        size="l"
        text="Юридическое название"
        onChange={onChange}
        value={values.name}
        maxLength={100}
        required
        isNotError={!errors.name && isDirtyInputs.name}
      />
      <Input
        name="inn"
        type="number"
        placeholder="ИНН"
        size="l"
        text="Без пробелов"
        onChange={onChange}
        value={values.inn}
        minLength={10}
        required
        isNotError={!errors.inn && isDirtyInputs.inn && values.inn.length >= 10}
      >
      </Input>
      <div className="popup__inputs">
        <Input
          name="phone_number"
          type="tel"
          placeholder="+7"
          size="m"
          text="Номер телефона без дефисов"
          onChange={onChange}
          value={values.phone_number}
          maxLength={20}
          required
          isNotError={!errors.phone_number && isDirtyInputs.phone_number}
        />
        <Input
          name="email"
          type="email"
          placeholder="box@mail.ru"
          size="m"
          text="Почта"
          onChange={onChange}
          value={values.email}
          maxLength={254}
          required
          isNotError={!errors.email && isDirtyInputs.email}
        />
      </div>

      <Input
        name="address"
        type="select"
        placeholder="Край/область"
        size="l"
        text="Начните ввод, чтобы выбрать из списка"
        onChange={onChange}
        value={values.address}
        options={options}
        autoComplete='off'
        required
        isNotError={!errors.address && isDirtyInputs.address}
      />
      <div className="popup__container popup__container_type_radio">
        <h2 className="popup__subtitle popup__subtitle_type_bolded">Вы работаете с НДС?</h2>
        <div className="popup__radio">
          <LabelCheckbox type="radio" name="vat" id="vat1" text="Да" checked={values.vat === 'yes'} value="yes" onChange={onChange} required />
          <LabelCheckbox type="radio" name="vat" id="vat2" text="Нет" checked={values.vat === 'no'} value="no" onChange={onChange} required />
        </div>
      </div>
    </>
  );
};

export default EntityRegistration;
