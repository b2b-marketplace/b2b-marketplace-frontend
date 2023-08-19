import React from 'react';
import './AccountBuyerCompany.scss';
import AccountTitle from '../../../UI/Account/AccountTitle/AccountTitle';
import IconPencil from '../../../UI/Icon/Icon_pencil';
import IconStarAccount from '../../../UI/Icon/Icon_star-account';
import AccountInputField from '../../../UI/Account/AccountInputField/AccountInputField';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import IconPhone from '../../../UI/Icon/Icon_phone';
import IconMail from '../../../UI/Icon/Icon_mail';
import IconInfoFil from '../../../UI/Icon/Icon_info_fill';

const AccountBuyerCompany = () => {
  return (
    <section className="account-buyer-company">
      <div>
        <div className="account-buyer-company__conteiner">
          <AccountTitle name="ООО «Компания»" title="Покупатель" icon={<IconPencil />} />
          <IconStarAccount />
          <span className="account-buyer-company__rating">5,0</span>
        </div>
        <form className="account-buyer-company__form">
          <h2 className="account-buyer-company__title">Данные покупателя</h2>
          <AccountInputField label="Способ оплаты" />
          <AccountInputField label="Счет" placeholder="000000000 0000" type="number" />
          <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" />
          <AccountInputField label="Регион доставки" placeholder="Город" type="text" />
          <h2 className="account-buyer-company__title">
            Контакты
            <Tooltip
              position="right"
              tooltipContent={
                <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
              }>
              <IconInfoFil />
            </Tooltip>
          </h2>
          <AccountInputField label="Почта" placeholder="Почта" type="email" icon={<IconMail />} />
          <AccountInputField
            label="Телефон"
            placeholder="Телефон"
            type="tel"
            icon={<IconPhone />}
          />
        </form>
      </div>
    </section>
  );
};

export default AccountBuyerCompany;
