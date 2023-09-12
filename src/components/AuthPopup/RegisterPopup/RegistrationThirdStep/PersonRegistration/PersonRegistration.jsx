import Input from "../../../Input/Input";

const PersonRegistration = ({ onNext }) => {
  return (
    <>
      <Input
        name="last-name"
        type="text"
        placeholder="Фамилия"
        size="l"
        text="Кририллицей"
      />
      <Input
        name="name"
        type="text"
        placeholder="Имя"
        size="l"
        text="Кририллицей"
      />

      <div className="popup__inputs">
        <Input
          name="tel"
          type="tel"
          placeholder="+7"
          size="m"
          text="Номер телефона без дефисов"
        />
        <Input
          name="email"
          type="email"
          placeholder="box@mail.ru"
          size="m"
          text="Почта"
        />
      </div>

      {/* <Input
        name="adress"
        type="text"
        placeholder="Край/область"
        size="l"
        text="Выберите свой из списка"
      /> */}
      <Input
        name="adress"
        type="select"
        placeholder="Край/область"
        size="l"
        text="Начните ввод, чтобы выбрать из списка"
      >
        <option value="">Край/область</option>
        <option value="1">Московская Область</option>
        <option value="2">Ленинградская область</option>
      </Input>
    </>
  );
};

export default PersonRegistration;
