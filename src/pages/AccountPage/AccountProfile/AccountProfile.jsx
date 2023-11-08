import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { AccountHeader } from '../../../widgets/account';
import useValidation from '../../../shared/hooks/useValidation';
import { accountModel } from '../../../entities/account';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import IconMail from '../../../components/UI/Icon/Icon_mail';
import AccountInputField from '../../../components/UI/Account/AccountInputField/AccountInputField';

import './AccountProfile.scss';

const AccountProfile = () => {
  const { user } = accountModel.useAccount();
  const { company } = user;

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDisadled, setIsDisadled] = useState(true);

  const { values, handleChange, setValues, errors, isValid, resetForm } = useValidation({});
  useEffect(() => {
    //console.log(user);
    //values.inn = company.inn.toString();
    setValues(values);
  }, []);

  // useEffect(() => {
  //   setValues(values);
  // }, [values]);

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
    <div className="account-profile">
      <div className="account-profile__blok">
        <AccountHeader />
        <form className="account-profile__form" onSubmit={handleEdit} noValidate>
          <div className="account-profile__form-block">
            <div className="account-profile__title-group">
              <h2 className="account-profile__title">Данные покупателя</h2>
              <p className="account-profile__info">
                Их видите только вы и служба поддержки B2Buy.ru
              </p>
            </div>
            <fieldset className="account-profile__field" disabled={isDisadled}>
              {/*<AccountInputField*/}
              {/*  label="Счет"*/}
              {/*  placeholder="7209176529 0000"*/}
              {/*  id="bankaccount"*/}
              {/*  name="bankaccount"*/}
              {/*  mode="text"*/}
              {/*  minLength={8}*/}
              {/*  required*/}
              {/*  isDisabled={isDisadled}*/}
              {/*  onChange={handleChange}*/}
              {/*  value={values.bankaccount || ''}*/}
              {/*  isValid={isValid}*/}
              {/*  errors={errors.bankaccount}*/}
              {/*/>*/}
              <AccountInputField
                label="ИНН"
                placeholder="0000000000"
                id="inn"
                name="inn"
                type="text"
                minLength={10}
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.inn || company.inn.toString() || ''}
                isValid={isValid}
                errors={errors.inn}
              />
              {/*<AccountInputField*/}
              {/*  label="Регион доставки"*/}
              {/*  placeholder="Москва, Россия"*/}
              {/*  id="region"*/}
              {/*  name="region"*/}
              {/*  mode="text"*/}
              {/*  isDisabled={isDisadled}*/}
              {/*  onChange={handleChange}*/}
              {/*  value={values.region || ''}*/}
              {/*  isValid={isValid}*/}
              {/*  minLength={3}*/}
              {/*  maxLength={25}*/}
              {/*  errors={errors.region}*/}
              {/*/>*/}
            </fieldset>
          </div>
          <div className="account-profile__form-block">
            <div className="account-profile__title-group">
              <h2 className="account-profile__title">
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
            <fieldset className="account-profile__field" disabled={isDisadled}>
              <AccountInputField
                label="Почта"
                placeholder="E-mail"
                id="email"
                name="email"
                type="email"
                isDisabled={isDisadled}
                onChange={handleChange}
                value={values.email || user.email || ''}
                icon={<IconMail />}
                isValid={isValid}
                errors={errors.email}
              />
              <AccountInputField
                label="Телефон"
                placeholder="Телефон"
                id="phone"
                name="phone"
                type="text"
                isDisabled={isDisadled}
                onChange={handleChange}
                icon={<IconPhone />}
                value={values.phone || company.phone_number.phone_number.toString() || ''}
                isValid={isValid}
                errors={errors.phone}
              />
            </fieldset>
          </div>
          {/*{isEditMode ? (*/}
          {/*  <div className="account-profile__button-section">*/}
          {/*    <Button size="l" primary dark mode="submit" onClick={handleEdit} disabled={!isValid}>*/}
          {/*      Сохранить*/}
          {/*    </Button>*/}
          {/*    <Button size="l" primary dark mode="button" onClick={cancelEdit}>*/}
          {/*      Отменить*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*) : (*/}
          {/*  <div className="account-profile__button-section">*/}
          {/*    <Button disabled={true} size="l" primary dark mode="button" onClick={editInfo}>*/}
          {/*      Редактировать*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*)}*/}
        </form>

        {/* <AccountPaymentInfo title="Способы оплаты" />  */}
      </div>
    </div>
  );
};

export default AccountProfile;
