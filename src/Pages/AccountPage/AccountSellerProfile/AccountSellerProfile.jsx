import React from 'react';
import './AccountSellerProfile.scss';
import IconMail from '../../../components/UI/Icon/Icon_mail';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import Tooltip from '../../../components/UI/Tooltip/Tooltip';
import AccountInputField from '../../../components/UI/Account/AccountInputField/AccountInputField';
import IconPencil from '../../../components/UI/Icon/Icon_pencil';
import IconInfoFil from '../../../components/UI/Icon/Icon_info_fill';

const AccountSellerProfile = () => {
  return (
    <section className="account-seller-profile">
      <div className="account-seller-profile__blok">
        <AccountTitle name="ООО «Компания»" title="Продавец" icon={<IconPencil />} />

        <form className="account-seller-profile__form">
          <textarea
            className="account-seller-profile__description"
            name="comment"
            cols="40"
            rows="3"
            placeholder="Описание компании"></textarea>
          <div className="account-seller-profile__control">
            <h2 className="account-seller-profile__title">Данные продавец</h2>
            <div className="account-seller-profile__field">
              <AccountInputField label="Счет" placeholder="000000000 0000" type="number" />
              <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" />
              <AccountInputField label="ОГРН" placeholder="000000000 0000" type="number" />
              <AccountInputField label="Регион доставки" placeholder="Город" type="text" />
            </div>
          </div>

          <div className="account-seller-profile__control">
            <h2 className="account-seller-profile__title">
              Контакты
              <Tooltip
                position="right"
                tooltipContent={
                  <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
                }>
                <IconInfoFil />
              </Tooltip>
            </h2>
            <div className="account-seller-profile__field">
              <AccountInputField
                label="Почта"
                placeholder="Почта"
                type="email"
                icon={<IconMail />}
              />
              <AccountInputField
                label="Телефон"
                placeholder="Телефон"
                type="tel"
                icon={<IconPhone />}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountSellerProfile;
