import React, { useState } from 'react';
import './AccountSellerProfile.scss';
import useValidation from '../../../hooks/useValidation';
import IconMail from '../../../components/UI/Icon/Icon_mail';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import AccountInputField from '../../../components/UI/Account/AccountInputField/AccountInputField';
import { Button } from '../../../../src/components/UI/Button/Button';

const AccountSellerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDisadled, setIsDisadled] = useState(true);

  const { values, handleChange, errors, isValid, resetForm } = useValidation({});

  function editInfo(e) {
    e.preventDefault();
    setIsEditMode(true);
    setIsDisadled(false);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditMode(false);
    setIsDisadled(true);
  }

  function cancelEdit(e) {
    e.preventDefault();
    setIsEditMode(false);
    setIsDisadled(true);
  }

  return (
    <section className="account-seller-profile">
      <div className="account-seller-profile__blok">
        <AccountTitle
          name="ООО «ОРСО»"
          title="Продавец"
          button="Редактировать" /* icon={<IconPencil />} */
        />

        <form className="account-seller-profile__form" noValidate onSubmit={handleEdit}>
          <div className="account-buyer-profile__form-block">
            <div className="account-seller-profile__title-group">
              <h2 className="account-seller-profile__title">О компании</h2>
              <p className="account-seller-profile__info">
                Эта информация отображается на странице вашей компании
              </p>
            </div>
            <textarea
              className="account-seller-profile__description"
              name="comment"
              cols="40"
              rows="7"
              placeholder="Описание компании"
            >
              Наша компания с 1999 г. производит верхнюю одежду для детей от 0 до 16 лет. У нас есть
              фабрика полного цикла — разрабатываем дизайн и выпускаем готовые изделия. Все циклы
              производства проходят в одном здании. Два раза в год выпускаем новые коллекции —
              зимние и весенние. Также дважды в год участвуем в международной выставке CJF Детская
              мода в Москве. Представляем два бренда ARTEL SPORT и ORSO BIANCO. Ассортимент очень
              разнообразен как по моделям, так и по размерному ряду.
            </textarea>
          </div>
          <div className="account-buyer-profile__form-block">
            <div className="account-seller-profile__title-group">
              <h2 className="account-seller-profile__title">Данные продавца</h2>
              <p className="account-seller-profile__info">
                Их видите только вы и служба поддержки B2Buy.ru
              </p>
            </div>
            <fieldset className="account-seller-profile__field" disabled={isDisadled}>
              <AccountInputField
                label="Счет"
                placeholder="000000000 0000"
                id="bankaccount"
                name="bankaccount"
                type="number"
                minLength={8}
                required
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.bankaccount || ''}
                isValid={isValid}
                errors={errors.bankaccount}
              />
              <AccountInputField
                label="ИНН"
                placeholder="000000000 0000"
                id="inn"
                name="inn"
                type="number"
                minLength={10}
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.inn || ''}
                isValid={isValid}
                errors={errors.inn}
              />
              <AccountInputField
                label="ОГРН"
                placeholder="000000000 0000"
                id="ogrn"
                name="ogrn"
                type="number"
                minLength={10}
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.ogrn || ''}
                isValid={isValid}
                errors={errors.ogrn}
              />
              <AccountInputField
                label="Регион доставки"
                placeholder="Город"
                id="region"
                name="region"
                type="text"
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.region || ''}
                isValid={isValid}
                minLength={3}
                maxLength={25}
                errors={errors.region}
              />
            </fieldset>
          </div>

          <div className="account-buyer-profile__form-block">
            <div className="account-buyer-profile__title-group">
              <h2 className="account-seller-profile__title">
                Контакты
                {/* <Tooltip
                  position="right"
                  tooltipContent={
                    <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
                  }>
                  <IconInfoFil />
                </Tooltip> */}
              </h2>
            </div>
            <fieldset className="account-seller-profile__field" disabled={isDisadled}>
              <AccountInputField
                label="Почта"
                placeholder="Почта"
                type="email"
                id="email"
                name="email"
                icon={<IconMail />}
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.email || ''}
                isValid={isValid}
                errors={errors.email}
              />
              <AccountInputField
                label="Телефон"
                placeholder="Телефон"
                id="phone"
                name="phone"
                type="tel"
                icon={<IconPhone />}
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.phone || ''}
                isValid={isValid}
                errors={errors.phone}
              />
            </fieldset>
          </div>

          {isEditMode ? (
            <div className="account-seller-profile__button-container">
              <Button size="l" primary dark type="submit" onClick={handleEdit} disabled={!isValid}>
                Сохранить
              </Button>
              <Button size="l" primary dark type="button" onClick={cancelEdit}>
                Отменить
              </Button>
            </div>
          ) : (
            <div className="account-buyer-profile__button-container">
              <Button size="l" primary dark type="button" onClick={editInfo}>
                Редактировать
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AccountSellerProfile;
