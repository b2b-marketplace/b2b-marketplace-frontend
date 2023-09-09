import { Button } from "../../../../UI/Button/Button";
import Input from "../../../Input/Input";

const PersonRegistration = ({ onNext }) => {
  return (
    <>
      <h2 className="popup__title">Укажите свои данные</h2>
      <Input
        name="last-name"
        type="text"
        placeholder="Фамилия"
        size="xxl"
        text="Кририллицей"
      />
      <Input
        name="name"
        type="text"
        placeholder="Имя"
        size="xxl"
        text="Кририллицей"
      />

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

      <Button mode="secondary" onClick={onNext} type="button" size="l">Далее</Button>
    </>
  );
};

export default PersonRegistration;
