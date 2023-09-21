import React, { useState } from 'react';
import Counter from '../../../components/UI/Counter/Counter';
import './AccountSellerProductAdd.scss';
import { Button } from '../../../components/UI/Button/Button';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import InputField from '../../../components/UI/InputField/InputField';
import FileUpload from '../../../components/UI/FileUpload/FileUpload';
import DropDown from '../../../components/UI/DropDown/DropDown';
import usePopup from '../../../hooks/usePopup';
import CancelAddProductPopup from '../../../components/AuthPopup/CancelAddProductPopup/CancelAddProductPopup';

const AccountSellerProductAdd = () => {
  const { openPopup: openModerationNewProductPopup } = usePopup('addNewItem');
  const { openPopup: openCancelAddProductPopup, closePopup } = usePopup('cancelAddnewItem');
  const [formErrors, setFormErrors] = useState({});

  // Состояние для данных формы
  const [formData, setFormData] = useState({
    category: 0,
    sku: '',
    name: '',
    brand: '',
    price: '',
    wholesale_quantity: 2147483647,
    quantity_in_stock: 2147483647,
    description: '',
    manufacturer_country: '',
    videos: ['http://example.com'],
    images: ['http://example.com'],
  });

  // Обработчик изменения данных формы
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(), // Trim the value before storing it in formData
    });

    const newFormErrors = { ...formErrors };
    if (value.trim() === '' && name !== 'description') {
      newFormErrors[name] = 'Обязательное поле';
    } else {
      delete newFormErrors[name];
    }
    setFormErrors(newFormErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleResetForm = () => {
    console.log('Before reset:', formData);
    // Сбросить значения в форме
    setFormData({
      category: 0,
      sku: '',
      name: '',
      brand: '',
      price: '',
      wholesale_quantity: 2147483647,
      quantity_in_stock: 2147483647,
      description: '',
      manufacturer_country: '',
      videos: ['http://example.com'],
      images: ['http://example.com'],
    });

    console.log('After reset:', formData);
    closePopup('cancelAddnewItem');
  };

  const handleCancel = () => {
    closePopup('cancelAddnewItem');
  };

  const handleConfirm = () => {
    console.log('Confirmed');
    handleResetForm();
    closePopup('cancelAddnewItem');
  };

  // Функция для проверки того, заполнены ли все обязательные поля
  const areAllRequiredFieldsFilled = () => {
    for (const fieldName of Object.keys(formData)) {
      const value = formData[fieldName];
      if (typeof value === 'string' && value.trim() === '') {
        return false;
      }
    }
    return true;
  };

  return (
    <section className="account-seller-product-add">
      <div className="account-seller-product-add__section">
        <AccountTitle name="ООО «Компания»" title="Продавец" />
        <form className="account-seller-product-add__form" onSubmit={handleSubmit}>
          <FileUpload
            name="images"
            type="image"
            label="Изображение*"
            text="Нажмите на «+» или перетащите фото товара (JPEG, PNG) в рамку"
            required
          />
          {formErrors.images && <div className="error-message">{formErrors.images}</div>}

          <FileUpload
            name="videos"
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
              required
              error={formErrors.category}
            />
            {formErrors.category && <div className="error-message">{formErrors.category}</div>}

            <InputField
              name="name"
              label="Название товара*"
              placeholder="Наименование"
              type="text"
              onChange={handleFormChange}
              required
            />

            <InputField
              name="sku"
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
              name="manufacturer_country"
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
              required
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
                name="description"
                className="account-seller-product-add__textarea"
                placeholder="Добавьте описание товара"
                onChange={handleFormChange}
              ></textarea>
            </div>
          </div>

          <div className="account-seller-product-add__conteiner">
            <label className="account-seller-product-add__label-counter">
              Кол-во товара*
              <Counter name="quantity_in_stock" onChange={handleFormChange} required />
            </label>

            <label className="account-seller-product-add__label-counter">
              Цена/за единицу товара*
              <Counter name="price" onChange={handleFormChange} required />
            </label>

            <label className="account-seller-product-add__label-counter">
              Мин. объем заказа*
              <Counter name="wholesale_quantity" onChange={handleFormChange} required />
            </label>
            <DropDown
              name="orderStatus"
              label="Статус&nbsp;заказа*"
              placeholder="В наличии"
              options={['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5']}
              className="small"
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="account-seller-product-add__control">
            <p className="account-seller-product-add__text">
              Каждый товар проходит модерацию. В среднем проверка занимает 30 минут
            </p>
            <div className="account-seller-product-add__button-conteiner">
              <Button
                size="l"
                onClick={openModerationNewProductPopup}
                primary
                dark
                type="submit"
                disabled={!areAllRequiredFieldsFilled()} 
              >
                Опубликовать
              </Button>
              <Button size="l" onClick={openCancelAddProductPopup} primary>
                Отмена
              </Button>
            </div>
          </div>
        </form>
      </div>
      <CancelAddProductPopup
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        onReset={handleResetForm}
      />
    </section>
  );
};

export default AccountSellerProductAdd;
