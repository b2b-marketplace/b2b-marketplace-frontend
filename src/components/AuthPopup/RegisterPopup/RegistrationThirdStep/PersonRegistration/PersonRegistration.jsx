import Input from '../../../Input/Input';
const options = [
  { value: 'moscow', label: 'Московская Область' },
  { value: 'Spb', label: 'Ленинградская Область' },
  { value: 'newCity', label: 'Новгородская Область' },
  { value: 'HowkCity', label: 'Орловская Область' },
];

const PersonRegistration = ({ onChange, values, errors, isDirtyInputs }) => {
  return (
    <>
      <Input
        name="first_name"
        type="text"
        placeholder="Фамилия"
        size="l"
        text="Кририллицей"
        onChange={onChange}
        value={values.first_name}
        maxLength={100}
        required
        isNotError={!errors.first_name && isDirtyInputs.first_name}
      />
      <Input
        name="name"
        type="text"
        placeholder="Имя"
        size="l"
        text="Кририллицей"
        onChange={onChange}
        value={values.name}
        maxLength={100}
        required
        isNotError={!errors.name && isDirtyInputs.name}
      />

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
          isNotError={!errors.phone_number && isDirtyInputs.phone_number && values.phone_number.length >= 9}
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
        autoComplete="off"
        required
        isNotError={!errors.address && isDirtyInputs.address}
      />
    </>
  );
};

export default PersonRegistration;
