import IconInfo from "../../../UI/Icon/IconInfo";
import Input from "../../Input/Input";
import NextButton from "../../NextButton/NextButton";

const RegistrationSecondStep = ({ onNext }) => {
  return (
    <>
      <h2 className="popup__title">Укажите данные организации</h2>
      <Input
        name="company"
        type="text"
        placeholder="ОАО «Компания»"
        size="l"
        text="Юридическое название"
      />
      <Input
        name="tin"
        type="number"
        placeholder="ИНН"
        size="l"
        text="Без пробелов"
      >
        <button className="popup__button input-label__button input-label__button_type_info" type="button">
          <IconInfo />
        </button>
      </Input>
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
        text="Выберите свой из списка"
      >
        <option value="">Край/область</option>
        <option value="1">Московская Область</option>
        <option value="2">Ленинградская область</option>
      </Input>

      <div className="popup__inputs">
        <Input
          name="email"
          type="email"
          placeholder="Почта"
          size="s"
          text=""
        />
        <Input
          name="tel"
          type="tel"
          placeholder="+7"
          size="s"
          text="Без дефисов и пробелов"
        />
      </div>
      <NextButton onNext={onNext} />
    </>
  );
};

export default RegistrationSecondStep;
