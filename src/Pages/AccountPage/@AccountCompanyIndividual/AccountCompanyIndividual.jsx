import React from 'react';
import './AccountCompanyIndividual.scss';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import IconPencil from '../../../components/UI/Icon/Icon_pencil';
import AccountInputField from '../../../components/UI/Account/AccountInputField/AccountInputField';
import Tooltip from '../../../components/UI/Tooltip/Tooltip';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import IconMail from '../../../components/UI/Icon/Icon_mail';
import IconInfoFil from '../../../components/UI/Icon/Icon_info_fill';

const AccountCompanyBuyer = () => {
  return (
    <section className="account-company-buyer">
      <div>
        <div className="account-company-buyer__conteiner">
          <AccountTitle name="Иванов Иван Иванович" title="Покупатель" icon={<IconPencil />} />
        </div>
        <form className="account-company-buyer__form">
          <h2 className="account-company-buyer__title">Данные покупателя</h2>
          <AccountInputField label="Способ оплаты" />
          <AccountInputField label="Счет" placeholder="000000000 0000" type="number" />
          <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" />
          <AccountInputField label="Регион доставки" placeholder="Город" type="text" />
          <h2 className="account-company-buyer__title">
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

export default AccountCompanyBuyer;
