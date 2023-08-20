import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import './AccountSellerProductAdd.scss';
import { Button } from '../../../UI/Button/Button';
import AccountTitle from '../../../UI/Account/AccountTitle/AccountTitle';
import InputField from '../../../UI/InputField/InputField';
import FileUpload from '../../../UI/FileUpload/FileUpload';
import DropDown from '../../../UI/DropDown/DropDown';
import logo from '../../../../images/logofooter.svg';

const AccountSellerProductAdd = () => {
  return (
    <section className="account-seller-product-add">
      <div className="account-seller-product-add__section">
        <AccountTitle logoSrc={logo} name="ООО «Компания»" title="Продавец" />
        <form className="account-seller-product-add__form">
          <FileUpload
            label="Добавить изображение"
            text="Нажмите на «+» или&nbsp;перетащите фото в&nbsp;эту&nbsp;область"
            comet="Изображение в формате PNG, JPEG. До 5 фото"
          />
          <FileUpload
            label="Добавить видео"
            text="Нажмите на «+» или&nbsp;перетащите видео в&nbsp;эту область"
            comet="1 видео длительностью не более 3 мин"
          />
          <div className="account-seller-product-add__field">
            <DropDown label="Категория товара" placeholder="Выберите из списка" />
            <InputField label="Название товара" placeholder="Кожаная мужская куртка" type="text" />
            <InputField label="Артикул" placeholder="000 000" type="number" />
            <DropDown label="Бренд" placeholder="Выберите из списка" />
            <InputField label="Производитель" placeholder="Страна производитель" type="text" />
            <DropDown label="Размер" placeholder="Выберите из списка" />
            <DropDown label="Цвет" placeholder="Выберите из списка" />
            <div className="account-seller-product-add__conteiner-textarea">
              <label className="account-seller-product-add__label-textarea">Описание товара</label>
              <textarea
                className="account-seller-product-add__textarea"
                placeholder="Добавьте описание товара"></textarea>
            </div>
          </div>
          <div className="account-seller-product-add__conteiner">
            <div className="account-seller-product-add__field-counter">
              <label className="account-seller-product-add__label">Кол-во товара</label>
              <Counter />
            </div>
            <div className="account-seller-product-add__field-counter">
              <label className="account-seller-product-add__label">Цена/за единицу товара</label>
              <Counter />
            </div>
            <div className="account-seller-product-add__field-counter">
              <label className="account-seller-product-add__label">Мин. объем заказа</label>
              <Counter />
            </div>
            <div className="account-seller-product-add__field-counter">
              <label className="account-seller-product-add__label">Статус заказа</label>
              <input className="account-seller-product-add__input-status" placeholder="В наличии" />
            </div>
          </div>
          <div className="account-seller-product-add__control">
            <p className="account-seller-product-add__text">
              Каждый товар проходит модерацию. В&nbsp;среднем проверка занимает 30 минут
            </p>
            <div className="account-seller-product-add__button-conteiner">
              <Button size="xxxxl" primary={false} border={true}>
                Опубликовать
              </Button>
              <Button size="xxxxl" primary={true} border={true}>
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
