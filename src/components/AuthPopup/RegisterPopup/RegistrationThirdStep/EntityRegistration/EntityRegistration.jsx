import { Button } from "../../../../UI/Button/Button";
import Input from "../../../Input/Input";
import LabelCheckbox from "../../../LabelCheckbox/LabelCheckbox";

const EntityRegistration = ({ onNext }) => {
  return (
    <>
      <Input
        name="company"
        type="text"
        placeholder="ОАО «Компания»"
        size="xxl"
        text="Юридическое название"
      />
      <Input
        name="tin"
        type="number"
        placeholder="ИНН"
        size="xxl"
        text="Без пробелов"
      >
      </Input>
      {/* <Input
        name="adress"
        type="text"
        placeholder="Край/область"
        size="xxl"
        text="Выберите свой из списка"
      /> */}

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
      
      <Input
        name="adress"
        type="select"
        placeholder="Край/область"
        size="xxl"
        text="Начните ввод, чтобы выбрать из списка"
      >
        <option value="">Край/область</option>
        <option value="1">Московская Область</option>
        <option value="2">Ленинградская область</option>
      </Input>
      <div className="popup__container popup__container_type_radio">
        <h2 className="popup__subtitle popup__subtitle_type_bolded">Вы работаете с НДС?</h2>
        <div className="popup__radio">
          <LabelCheckbox type="radio" name="nds" id="nds1" text="Да" />
          <LabelCheckbox type="radio" name="nds" id="nds2" text="Нет" />
        </div>
      </div>
    </>
  );
};

export default EntityRegistration;
