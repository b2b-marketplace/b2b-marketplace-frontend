import React, { useState, useEffect } from 'react';

import { Button } from '../../../components/UI/Button/Button';
import IconInfoFill from '../../../components/UI/Icon/Icon_info_fill';
import IconMail from '../../../components/UI/Icon/Icon_mail';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import { userModel } from '../../../entities/user';
import useInput from '../../../shared/hooks/useInput';
import Tooltip from '../../../shared/ui/Tooltip/Tooltip';
import { AccountHeader, AccountInputField } from '../../../widgets/account';

import './AccountProfile.scss';

/**
 * Компонент AccountProfile отображает и управляет информацией учетной записи пользователя,
 * позволяя пользователю редактировать и сохранять детали, такие как информация о компании, контактные данные
 * и другие связанные с профилем данные.
 *
 * @component
 * @returns {JSX.Element} Возвращает JSX для компонента AccountProfile.
 */

const AccountProfile = () => {
  const { user } = userModel.useGetUser();
  const { company } = user;
  const isSupplier = company.role === 'supplier';

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const initialFormValues = {
    account: '',
    inn: company.inn.toString(),
    deliveryRegion: '',
    email: user.email,
    phone: company.phone_number.phone_number.toString(),
    ...(company.role === 'supplier' && {
      ogrn: '',
      comment: '',
    }),
  };

  const { values, errors, isNotValidForm, handleChange, resetValues } = useInput(
    initialFormValues,
    user.role
  );

  useEffect(() => {
    resetValues({
      account: '',
      inn: company.inn.toString(),
      deliveryRegion: '',
      email: user.email,
      phone: company.phone_number.phone_number.toString(),
    });
  }, [company, user, resetValues]);

  function editInfo(e) {
    e.preventDefault();
    setIsEditMode(true);
    setIsDisabled(false);
  }

  function handleEdit(e) {
    e.preventDefault();

    if (!isNotValidForm) {
      setIsEditMode(false);
      setIsDisabled(true);
    }
  }

  function cancelEdit(e) {
    e.preventDefault();
    setIsEditMode(false);

    resetValues(initialFormValues);
    setIsDisabled(true);
  }

  return (
    <div className="account-profile">
      <form className="account-profile__form" onSubmit={handleEdit} noValidate>
        <AccountHeader isEditMode={isEditMode} />
        {isSupplier && (
          <div className="account-profile__form-block">
            <div className="account-profile__title-group">
              <h2 className="account-profile__title">О компании</h2>
              <p className="account-profile__info">
                Эта информация отображается на странице вашей компании
              </p>
            </div>

            <textarea
              className="account-profile__description"
              name="comment"
              cols="40"
              rows="7"
              placeholder="Описание компании"
              disabled={!isEditMode}
              value={values.comment || ''}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="account-profile__form-block">
          <div className="account-profile__title-group">
            <h2 className="account-profile__title">
              {isSupplier ? 'Данные продавца' : 'Данные покупателя'}
            </h2>
            <p className="account-profile__info">Их видите только вы и служба поддержки B2Buy.ru</p>
          </div>

          <fieldset className="account-profile__field" disabled={isDisabled}>
            {isSupplier && (
              <AccountInputField
                label="ОГРН"
                placeholder="000000000 0000"
                id="ogrn"
                name="ogrn"
                type="number"
                minLength={10}
                isDisabled={isDisabled}
                onChange={handleChange}
                value={values.ogrn || ''}
                isError={errors.ogrn}
              />
            )}
            <AccountInputField
              label="Счет"
              placeholder="Номер счета"
              id="account"
              name="account"
              type="text"
              isDisabled={isDisabled}
              onChange={handleChange}
              value={values.account || ''}
              isError={errors.account}
            />
            <AccountInputField
              label="ИНН"
              placeholder="0000000000"
              id="inn"
              name="inn"
              type="number"
              minLength={10}
              required
              isDisabled={isDisabled}
              onChange={handleChange}
              value={values.inn || ''}
              isError={errors.inn}
            />
            <AccountInputField
              label="Регион доставки"
              placeholder="Регион"
              id="deliveryRegion"
              name="deliveryRegion"
              type="text"
              isDisabled={isDisabled}
              onChange={handleChange}
              value={values.deliveryRegion || ''}
              isError={errors.deliveryRegion}
            />
          </fieldset>
        </div>
        <div className="account-profile__form-block">
          <div className="account-profile__title-group">
            <h2 className="account-profile__title">
              Контакты
              <Tooltip
                position="right"
                tooltipContent={
                  <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
                }
              >
                <IconInfoFill />
              </Tooltip>
            </h2>
          </div>
          <fieldset className="account-profile__field" disabled={isDisabled}>
            <AccountInputField
              label="Почта"
              placeholder="E-mail"
              id="email"
              name="email"
              type="email"
              required
              isDisabled={isDisabled}
              onChange={handleChange}
              value={values.email || ''}
              icon={<IconMail />}
              isError={errors.email}
            />
            <AccountInputField
              label="Телефон"
              placeholder="Телефон"
              id="phone"
              name="phone"
              type="tel"
              required
              isDisabled={isDisabled}
              onChange={handleChange}
              icon={<IconPhone />}
              value={values.phone || ''}
              isError={errors.phone}
            />
          </fieldset>
        </div>
        {isEditMode ? (
          <div className="account-profile__button-container">
            <Button
              size="xl"
              primary
              dark
              mode="submit"
              onClick={handleEdit}
              disabled={isNotValidForm}
            >
              Сохранить
            </Button>
            <Button size="xl" primary dark mode="button" onClick={cancelEdit}>
              Отменить
            </Button>
          </div>
        ) : (
          <div className="account-profile__button-container">
            <Button size="xl" primary dark mode="button" onClick={editInfo}>
              Редактировать
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AccountProfile;
