import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import './AccountProductAdd.scss';
import { Button } from '../../../UI/Button/Button';
import BiBag from '../../../UI/Icon/Icon_bibag';
import IconPackage from '../../../UI/Icon/Icon_package';
import IconBag from '../../../UI/Icon/Icon_bag';
import IconMessage from '../../../UI/Icon/Icon_message';
import IconLock from '../../../UI/Icon/Icon_lock';
import SidebarLeft from '../../../SidebarLeft/SidebarLeft';
import AccountTitle from '../../../Account/AccountTitle/AccountTitle';
import InputField from '../../../UI/InputField/InputField';
import FileUpload from '../../../UI/FileUpload/FileUpload';
import DropDown from '../../../UI/DropDown/DropDown';
import IconTrash from '../../../UI/Icon/Icon_trash';
import IconExit from '../../../UI/Icon/Icon_exit';

const AccountProductAdd = () => {
  const menuItems = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Товары' },
    { icon: <IconBag />, link: '#', label: 'Заказы' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  return (
    <section className="account-product-add">
      <SidebarLeft
        icon1={<IconTrash />}
        text1={'Выйти'}
        menuItems={menuItems}
        icon2={<IconExit />}
        text2={'Удалить аккаунт'}
        phone="8-800-800-00-00"
      />
      <div className="account-product-add__section">
        <AccountTitle name="ООО «Компания»" title="Продавец" />
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
            <DropDown label="Категория товара" placeholder="Выберите из списка" />
            <InputField label="Название товара" placeholder="Кожаная мужская куртка" type="text" />
            <InputField label="Артикул" placeholder="000 000" type="number" />
            <DropDown label="Бренд" placeholder="Выберите из списка" />
            <InputField label="Производитель" placeholder="Страна производитель" type="text" />
            <DropDown label="Размер" placeholder="Выберите из списка" />
            <DropDown label="Цвет" placeholder="Выберите из списка" />

            <label className="account-product-add__label-textarea">Описание товара</label>
            <textarea
              className="account-product-add__textarea"
              placeholder="Добавьте описание товара"></textarea>
          </div>
          <div className="account-product-add__conteiner">
            <div className="account-product-add__field-counter">
              <label className="account-product-add__label">Кол-во товара</label>
              <Counter />
            </div>
            <div className="account-product-add__field-counter">
              <label className="account-product-add__label">Цена/за единицу товара</label>
              <Counter />
            </div>
            <div className="account-product-add__field-counter">
              <label className="account-product-add__label">Мин. объем заказа</label>
              <Counter />
            </div>
            <div className="account-product-add__field-counter">
              <label className="account-product-add__label">Статус заказа</label>
              <input className="account-product-add__input-status" placeholder="В наличии" />
            </div>
          </div>

          <p className="account-product-add__text">
            Каждый товар проходит модерацию. В&nbsp;среднем проверка занимает 30 минут
          </p>
          <div className="account-product-add__button-conteiner">
            <Button size="xxxxl" primary={false} border={true}>
              Опубликовать
            </Button>
            <Button size="xxxxl" primary={true} border={true}>
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountProductAdd;
