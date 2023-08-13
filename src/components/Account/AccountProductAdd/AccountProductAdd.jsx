import Counter from '../../Counter/Counter';
import './AccountProductAdd.scss';
import { Button } from '../../Button/Button';
import АccountBar from '../АccountBar/АccountBar';
import AccountTitle from '../AccountTitle/AccountTitle';

const AccountProductAdd = () => {
  return (
    <section className="account-product-add">
      <АccountBar />
      <div className="account-product-add__section">
        <AccountTitle title="Продавец" />
        <form className="account-product-add__form">
          <div className="account-product-add__field">
            <label className="account-product-add__label-file">Добавить изображение</label>
            <div className="account-product-add__field-container">
              <input className="account-product-add__input-file" />
              <p className="account-product-add__comment">
                Нажмите на «+» или перетащите фото в эту область
              </p>
              <p className="account-product-add__comment2">
                Изображение в формате PNG, JPEG. До 5 фото
              </p>
            </div>
          </div>
          <div className="account-product-add__field">
            <label className="account-product-add__label-file">Добавить видео</label>
            <div className="account-product-add__field-container">
              <input className="account-product-add__input-file" type="" />
              <p className="account-product-add__comment">
                Нажмите на «+» или перетащите видео в эту область
              </p>
              <p className="account-product-add__comment2">1 видео длительностью не более 3 мин</p>
            </div>
          </div>
          <div className="account-product-add__field">
            <label className="account-product-add__label">Категория товара</label>
            <input
              className="account-product-add__input"
              type=""
              placeholder="Выберите из списка"
            />
            <label className="account-product-add__label">Название товара</label>
            <input
              className="account-product-add__input"
              type="text"
              placeholder="Кожаная мужская куртка"
            />
            <label className="account-product-add__label">Артикул</label>
            <input className="account-product-add__input" type="" placeholder="000 000" />
            <label className="account-product-add__label">Бренд</label>
            <input
              className="account-product-add__input"
              type=""
              placeholder="Выберите из списка"
            />
            <label className="account-product-add__label">Производитель</label>
            <input
              className="account-product-add__input"
              type=""
              placeholder="Страна производитель"
            />
            <label className="account-product-add__label">Размер</label>
            <input
              className="account-product-add__input"
              type=""
              placeholder="Выберите из списка"
            />
            <label className="account-product-add__label">Цвет</label>
            <input
              className="account-product-add__input"
              type=""
              placeholder="Выберите из списка"
            />
            <label className="account-product-add__label">Описание товара</label>
            <input
              className="account-product-add__input"
              type=""
              placeholder="Добавьте описание товара"
            />
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
              <input
                className="account-product-add__input-status"
                type=""
                placeholder="В наличии"
              />
            </div>

            <p className="account-product-add__title-text">
              Каждый товар проходит модерацию. В&nbsp;среднем проверка занимает 30 минут
            </p>
            <div className="account-product-add__button-conteiner">
              <Button size="xxl" primary={false} border={true} label={'Опубликовать'} />
              <Button size="xxl" primary={true} border={true} label={'Отмена'} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountProductAdd;
