import { useEffect } from 'react';
import useInput from '../../../../../hooks/useInput';
import Input from '../../../Input/Input';
const options = [
  { value: 'moscow', label: 'Московская Область' },
  { value: 'Spb', label: 'Ленинградская Область' },
  { value: 'newCity', label: 'Новгородская Область' },
  { value: 'HowkCity', label: 'Орловская Область' },
];

const PersonRegistration = ({ onFormChange }) => {
  const initValueParams = {
    email: '',
    name: '',
    inn: '',
    phone_number: '',
    address: '',
    vat: '',
  };

  const { errors, values, handleChange, isDirtyInputs, isNotValidForm } = useInput(initValueParams);

  const onChange = (event) => {
    handleChange(event);
  };

  useEffect(() => onFormChange(values, isNotValidForm), [values, isNotValidForm]);
  return (
    <>
      <Input name="last-name" type="text" placeholder="Фамилия" size="l" text="Кририллицей" />
      <Input name="name" type="text" placeholder="Имя" size="l" text="Кририллицей" />

      <div className="popup__inputs">
        <Input name="tel" type="tel" placeholder="+7" size="m" text="Номер телефона без дефисов" />
        <Input name="email" type="email" placeholder="box@mail.ru" size="m" text="Почта" />
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
        autoComplete="off"
        required
      />
    </>
  );
};

export default PersonRegistration;
