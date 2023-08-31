import Input from "../../../Input/Input";
import NextButton from "../../../NextButton/NextButton";

const PersonRegistration = ({ onNext }) => {
  return (
    <>
      <h2 className="popup__title">Укажите свои данные</h2>
      <div className="popup__inputs">
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
          size="s"
          text="Кририллицей"
        />
      </div>

      <div className="popup__inputs">
        <Input
          name="email"
          type="email"
          placeholder="Почта"
          size="m"
          text=""
        />
        <Input
          name="tel"
          type="tel"
          placeholder="+7"
          size="m"
          text="Без дефисов и пробелов"
        />
      </div>

      {/* <Input
        name="adress"
        type="text"
        placeholder="Край/область"
        size="xxl"
        text="Выберите свой из списка"
      /> */}
      <Input
        name="adress"
        type="select"
        placeholder="Край/область"
        size="xxl"
        text="Выберите свой из списка"
      >
        <option value="">Край/область</option>
        <option value="1">Московская Область</option>
        <option value="2">Ленинградская область</option>
      </Input>


      <NextButton onNext={onNext} />
    </>
  );
};

export default PersonRegistration;
