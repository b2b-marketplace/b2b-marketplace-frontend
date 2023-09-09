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
            label="Добавить изображение"
            text="Нажмите на «+» илиперетащите фото в эту область"
            comet="Изображение в формате PNG, JPEG. До 5 фото"
          />
          <FileUpload
            label="Добавить видео"
            text="Нажмите на «+» или перетащите видео в эту область"
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
              <label className="account-seller-product-add__label2">Цена/за единицу товара</label>
              <Counter />
            </div>
            <div className="account-seller-product-add__field-counter">
              <label className="account-seller-product-add__label">Мин. объем заказа</label>
              <Counter />
            </div>
            <div className="account-seller-product-add__field-counter">
              <label className="account-seller-product-add__label2">Статус заказа</label>
              <input className="account-seller-product-add__input-status" placeholder="В наличии" />
            </div>
          </div>
          <div className="account-seller-product-add__control">
            <p className="account-seller-product-add__text">
              Каждый товар проходит модерацию. В среднем проверка занимает 30 минут
            </p>
            <div className="account-seller-product-add__button-conteiner">
              <Button size="l" primary>
                Опубликовать
              </Button>
              <Button size="l" primary>
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
