import React from 'react';
import Counter from '../../../components/UI/Counter/Counter';
import './AccountSellerProductAdd.scss';
import { Button } from '../../../components/UI/Button/Button';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import InputField from '../../../components/UI/InputField/InputField';
import FileUpload from '../../../components/UI/FileUpload/FileUpload';
import DropDown from '../../../components/UI/DropDown/DropDown';

const AccountSellerProductAdd = () => {
  return (
    <section className="account-seller-product-add">
      <div className="account-seller-product-add__section">
        <AccountTitle name="ООО «Компания»" title="Продавец" />
        <form className="account-seller-product-add__form">
          <FileUpload
            label="Изображение*"
            text="Нажмите на «+» или перетащите фото товара (JPEG, PNG) в рамку"
          />
          <FileUpload
            label="Видео"
            text="Нажмите на «+» или перетащите одно видео с товаром не длиннее 1 мин в эту область"
          />
          <div className="account-seller-product-add__field">
            <DropDown label="Категория*" placeholder="Выберите из списка" />
            <InputField label="Название товара*" placeholder="Наименование" type="text" />
            <InputField label="Артикул" placeholder="000 000" type="number" />
            <DropDown label="Бренд" placeholder="Выберите из списка" />
            <InputField label="Производитель" placeholder="Страна производитель" type="text" />
            <DropDown label="Размер*" placeholder="Выберите из списка" />
            <DropDown label="Цвет" placeholder="Выберите из списка" />
            <div className="account-seller-product-add__conteiner-textarea">
              <label className="account-seller-product-add__label-textarea">Описание товара</label>
              <textarea
                className="account-seller-product-add__textarea"
                placeholder="Добавьте описание товара"></textarea>
            </div>
          </div>

          <div className="account-seller-product-add__conteiner">
            <label className="account-seller-product-add__label-counter">
              Кол-во товара*
              <Counter />
            </label>

            <label className="account-seller-product-add__label-counter">
              Цена/за единицу товара*
              <Counter />
            </label>

            <label className="account-seller-product-add__label-counter">
              Мин. объем заказа*
              <Counter />
            </label>
            <DropDown label="Статус&nbsp;заказа*" placeholder="В наличии" />
          </div>

          <div className="account-seller-product-add__control">
            <p className="account-seller-product-add__text">
              Каждый товар проходит модерацию. В среднем проверка занимает 30 минут
            </p>
            <div className="account-seller-product-add__button-conteiner">
              <Button size="xl" primary={true} border={true}>
                Опубликовать
              </Button>
              <Button size="xl" primary={true} border={true}>
                Отмена
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountSellerProductAdd;
