import React from 'react';
import './AccountBuyerProfile.scss';
import AccountTitle from '../../../UI/Account/AccountTitle/AccountTitle';
import IconPencil from '../../../UI/Icon/Icon_pencil';
import AccountInputField from '../../../UI/Account/AccountInputField/AccountInputField';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import IconPhone from '../../../UI/Icon/Icon_phone';
import IconMail from '../../../UI/Icon/Icon_mail';
import IconInfoFil from '../../../UI/Icon/Icon_info_fill';
import AccountDropDown from '../../../UI/Account/AccountDropDown/AccountDropDown';

const AccountBuyerProfile = () => {
  return (
    <section className="account-buyer-profile">
      <div className="account-buyer-profile__blok">
        <AccountTitle name="ООО «Компания»" title="Покупатель" icon={<IconPencil />} />

        <form className="account-buyer-profile__form">
          <div className="account-buyer-profile__control">
            <h2 className="account-buyer-profile__title">Данные покупателя</h2>
            <div className="account-buyer-profile__field">
              <AccountDropDown label="Способ оплаты" />
              <AccountInputField label="Счет" placeholder="000000000 0000" type="number" />
              <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" />
              <AccountInputField label="Регион доставки" placeholder="Город" type="text" />
            </div>
          </div>

          <div className="account-buyer-profile__control">
            <h2 className="account-buyer-profile__title">
              Контакты
              <Tooltip
                position="right"
                tooltipContent={
                  <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
                }>
                <IconInfoFil />
              </Tooltip>
            </h2>
            <div className="account-buyer-profile__field">
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

export default AccountBuyerProfile;
