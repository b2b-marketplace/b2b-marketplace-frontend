import Input from "../../../Input/Input";
import LabelCheckbox from "../../../LabelCheckbox/LabelCheckbox";

const EntityRegistration = ({ onChange, values }) => {
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
        minLength={1}
        maxLength={100}
        required
      />
      <Input
        name="inn"
        type="number"
        placeholder="ИНН"
        size="l"
        text="Без пробелов"
        onChange={onChange}
        value={values.inn}
        minLength={8}
        maxLength={10}
        required
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
          minLength={1}
          maxLength={20}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="box@mail.ru"
          size="m"
          text="Почта"
          onChange={onChange}
          value={values.email}
          required
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
        required
      >
        <option value="">Край/область</option>
        <option value="1">Московская Область</option>
        <option value="2">Ленинградская область</option>
      </Input>
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
