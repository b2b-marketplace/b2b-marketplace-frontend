import React, { useState } from 'react';
import Counter from '../../../components/UI/Counter/Counter';
import './AccountSellerProductAdd.scss';
import { Button } from '../../../components/UI/Button/Button';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import InputField from '../../../components/UI/InputField/InputField';
import FileUpload from '../../../components/UI/FileUpload/FileUpload';
import DropDown from '../../../components/UI/DropDown/DropDown';

const AccountSellerProductAdd = () => {
  // Состояние для данных формы
  const [formData, setFormData] = useState({
    image: null,
    video: null,
    category: '',
    productName: '',
    articul: '',
    brand: '',
    manufacturer: '',
    size: '',
    color: '',
    productDescription: '',
    productQuantity: 0,
    productPrice: 0,
    minOrderQuantity: 0,
    orderStatus: 'Value 1',
  });

  // Обработчик изменения данных формы
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      image: null,
      video: null,
      category: '',
      productName: '',
      articul: '',
      brand: '',
      manufacturer: '',
      size: '',
      color: '',
      productDescription: '',
      productQuantity: 0,
      productPrice: 0,
      minOrderQuantity: 0,
      orderStatus: 'Value 1',
    });
    console.log('Кнопка "Отмена" нажата');
  };

  return (
    <section className="account-seller-product-add">
      <div className="account-seller-product-add__section">
        <AccountTitle name="ООО «Компания»" title="Продавец" />
        <form className="account-seller-product-add__form" onSubmit={handleSubmit}>
          <FileUpload
            type="image"
            label="Изображение*"
            text="Нажмите на «+» или перетащите фото товара (JPEG, PNG) в рамку"
          />

          <FileUpload
            type="video"
            label="Видео"
            text="Нажмите на «+» или перетащите одно видео с товаром не длиннее 1 мин в эту область"
          />
          <div className="account-seller-product-add__field">
            <DropDown
              label="Категория*"
              name="category"
              placeholder="Выберите из списка"
              options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
              onChange={handleFormChange}
            />
            <InputField
              name="productName"
              label="Название товара*"
              placeholder="Наименование"
              type="text"
              onChange={handleFormChange}
            />
            <InputField
              name="articul"
              label="Артикул"
              placeholder="000 000"
              type="number"
              onChange={handleFormChange}
            />
            <DropDown
              name="brand"
              label="Бренд"
              placeholder="Выберите из списка"
              options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
              onChange={handleFormChange}
            />
            <InputField
              name="manufacturer"
              label="Производитель"
              placeholder="Страна производитель"
              type="text"
              onChange={handleFormChange}
            />
            <DropDown
              name="size"
              label="Размер*"
              placeholder="Выберите из списка"
              options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
              onChange={handleFormChange}
            />
            <DropDown
              name="color"
              label="Цвет"
              placeholder="Выберите из списка"
              options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
              onChange={handleFormChange}
            />
            <div className="account-seller-product-add__conteiner-textarea">
              <label className="account-seller-product-add__label-textarea">Описание товара</label>
              <textarea
                name="productDescription"
                className="account-seller-product-add__textarea"
                placeholder="Добавьте описание товара"
                onChange={handleFormChange}
              ></textarea>
            </div>
          </div>

          <div className="account-seller-product-add__conteiner">
            <label className="account-seller-product-add__label-counter">
              Кол-во товара*
              <Counter name="productQuantity" onChange={handleFormChange} />
            </label>

            <label className="account-seller-product-add__label-counter">
              Цена/за единицу товара*
              <Counter name="productPrice" onChange={handleFormChange} />
            </label>

            <label className="account-seller-product-add__label-counter">
              Мин. объем заказа*
              <Counter name="minOrderQuantity" onChange={handleFormChange} />
            </label>
            <DropDown
              name="orderStatus"
              label="Статус&nbsp;заказа*"
              placeholder="В наличии"
              options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
              className="small"
              onChange={handleFormChange}
            />
          </div>

          <div className="account-seller-product-add__control">
            <p className="account-seller-product-add__text">
              Каждый товар проходит модерацию. В среднем проверка занимает 30 минут
            </p>
            <div className="account-seller-product-add__button-conteiner">
              <Button size="xl" mode="secondary" border={true} type="submit">
                Опубликовать
              </Button>
              <Button size="xl" border={true} onClick={handleCancel}>
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
