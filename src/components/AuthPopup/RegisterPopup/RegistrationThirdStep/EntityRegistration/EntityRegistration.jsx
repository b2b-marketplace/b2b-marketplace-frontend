import Input from '../../../Input/Input';
import LabelCheckbox from '../../../LabelCheckbox/LabelCheckbox';
const options = [
  { value: 'moscow', label: 'Московская Область' },
  { value: 'Spb', label: 'Ленинградская Область' },
  { value: 'newCity', label: 'Новгородская Область' },
  { value: 'HowkCity', label: 'Орловская Область' },
];

const EntityRegistration = ({ onChange, values, errors, isDirtyInputs, serverErrors }) => {
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
        serverError={serverErrors.name || ''}
      />
      <Input
        name="inn"
        type="number"
        placeholder="ИНН"
        size="l"
        text="Без пробелов"
        onChange={onChange}
        value={values.inn}
        min={1000000000}
        max={9999999999}
        required
        isNotError={!errors.inn && isDirtyInputs.inn}
        serverError={serverErrors.inn || ''}
      ></Input>
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
          isNotError={
            !errors.phone_number && isDirtyInputs.phone_number && values.phone_number.length >= 9
          }
          serverError={serverErrors.phone_number || ''}
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
          serverError={serverErrors.email || ''}
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
        serverError={serverErrors.address || ''}
      />
      <div className="popup__container popup__container_type_radio">
        <p className="popup__subtitle popup__subtitle_type_bolded">Вы работаете с НДС?</p>
        <div className="popup__radio">
          <LabelCheckbox
            type="radio"
            name="vat"
            id="vat1"
            text="Да"
            checked={values.vat === 'yes'}
            value="yes"
            onChange={onChange}
            required
          />
          <LabelCheckbox
            type="radio"
            name="vat"
            id="vat2"
            text="Нет"
            checked={values.vat === 'no'}
            value="no"
            onChange={onChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default EntityRegistration;
