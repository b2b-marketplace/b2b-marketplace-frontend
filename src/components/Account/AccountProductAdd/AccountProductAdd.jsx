import React from 'react';
import Counter from '../../Counter/Counter';
import './AccountProductAdd.scss';
import { Button } from '../../Button/Button';
import АccountBar from '../АccountBar/АccountBar';
import AccountTitle from '../AccountTitle/AccountTitle';
import InputField from '../../InputField/InputField';
import FileUpload from '../../FileUpload/FileUpload';
import DropDown from '../DropDown/DropDown';

const AccountProductAdd = () => {
  return (
    <section className="account-product-add">
      <АccountBar />
      <div className="account-product-add__section">
        <AccountTitle title="Продавец" />
        <form className="account-product-add__form">
          <FileUpload
            label="Добавить изображение"
            text="Нажмите на «+» или перетащите фото в эту область"
            comet="Изображение в формате PNG, JPEG. До 5 фото"
          />
          <FileUpload
            label="Добавить видео"
            text="Нажмите на «+» или перетащите видео в эту область"
            comet="1 видео длительностью не более 3 мин"
          />
          <div className="account-product-add__field">
            <DropDown title="Категория товара" text="Выберите из списка" />
            <InputField label="Название товара" placeholder="Кожаная мужская куртка" type="text" />
            <InputField label="Артикул" placeholder="000 000" type="number" />
            <DropDown title="Бренд" text="Выберите из списка" />
            <InputField label="Производитель" placeholder="Страна производитель" type="text" />
            <DropDown title="Размер" text="Выберите из списка" />
            <DropDown title="Цвет" text="Выберите из списка" />
            <DropDown title="Описание товара" text="Добавьте описание товара" />
          </div>
          <div className="account-product-add__field-counter">
            <label className="account-product-add__label">Кол-во товара</label>
            <Counter />
            <label className="account-product-add__label">Цена/за единицу товара</label>
            <Counter />
          </div>
          <div className="account-product-add__field-counter">
            <label className="account-product-add__label">Мин. объем заказа</label>
            <Counter />
            <label className="account-product-add__label">Статус заказа</label>
            <input className="account-product-add__input-status" type="" placeholder="В наличии" />
          </div>

          <p className="account-product-add__title-text">
            Каждый товар проходит модерацию. В&nbsp;среднем проверка занимает 30 минут
          </p>
          <div className="account-product-add__button-conteiner">
            <Button size="xxl" primary={false} border={true} label={'Опубликовать'} />
            <Button size="xxl" primary={true} border={true} label={'Отмена'} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountProductAdd;
