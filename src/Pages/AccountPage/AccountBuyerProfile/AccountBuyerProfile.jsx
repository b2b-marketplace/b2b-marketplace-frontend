import React, { useState, useEffect } from 'react';
import './AccountBuyerProfile.scss';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import AccountInputField from '../../../components/UI/Account/AccountInputField/AccountInputField';
import AccountPaymentInfo from '../../../components/UI/Account/AccountPaymentInfo/AccountPaymentInfo';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import IconMail from '../../../components/UI/Icon/Icon_mail';
import useValidation from '../../../hooks/useValidation';
import { Button } from '../../../components/UI/Button/Button';

const AccountBuyerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDisadled, setIsDisadled] = useState(true);

  const { values, handleChange, setValues, errors, isValid, resetForm } = useValidation({});

  useEffect(() => {
    setValues(values);
  }, [values, setValues]);

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
    <section className="account-buyer-profile">
      <div className="account-buyer-profile__blok">
        <AccountTitle name="ООО «Планета»" title="Покупатель" />

        <form className="account-buyer-profile__form" onSubmit={handleEdit} noValidate>
          <div className="account-buyer-profile__form-block">
            <div className="account-buyer-profile__title-group">
              <h2 className="account-buyer-profile__title">Данные покупателя</h2>
              <p className="account-buyer-profile__info">
                Их видите только вы и служба поддержки B2Buy.ru
              </p>
            </div>
            <fieldset className="account-buyer-profile__field" disabled={isDisadled}>
              <AccountInputField
                label="Счет"
                placeholder="7209176529 0000"
                id="bankaccount"
                name="bankaccount"
                type="text"
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
                type="text"
                minLength={10}
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.inn || ''}
                isValid={isValid}
                errors={errors.inn}
              />
              <AccountInputField
                label="Регион доставки"
                placeholder="Москва, Россия"
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
              <h2 className="account-buyer-profile__title">
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
            <fieldset className="account-buyer-profile__field" disabled={isDisadled}>
              <AccountInputField
                label="Почта"
                placeholder="E-mail"
                id="email"
                name="email"
                type="email"
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.email || ''}
                icon={<IconMail />}
                isValid={isValid}
                errors={errors.email}
              />
              <AccountInputField
                label="Телефон"
                placeholder="Телефон"
                id="phone"
                name="phone"
                type="number"
                isDisabled={isDisadled}
                onChange={handleChange}
                icon={<IconPhone />}
                value={values.phone || ''}
                isValid={isValid}
                errors={errors.phone}
              />
            </fieldset>
          </div>
          {isEditMode ? (
            <div className="account-buyer-profile__button-container">
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

        {/* <AccountPaymentInfo title="Способы оплаты" />  */}
      </div>
    </section>
  );
};

export default AccountBuyerProfile;
