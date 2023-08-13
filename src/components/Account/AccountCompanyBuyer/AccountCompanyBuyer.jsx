import './AccountCompanyBuyer.scss';
import AccountBar from '../АccountBar/АccountBar';
import AccountTitle from '../AccountTitle/AccountTitle';
import IconPencil from '../../Icon/Icon_pencil';
import IconStarAccount from '../../Icon/Icon_star-account';
import AccountField from '../AccountField/AccountField';
import InfoToolTip from '../../InfoToolTip/InfoToolTip';
import IconPhone from '../../Icon/Icon_phone';
import IconMail from '../../Icon/Icon_mail';

const AccountCompanyBuyer = () => {
  return (
    <section className="account-company-buyer">
      <AccountBar />
      <div>
        <div className="account-company-buyer__conteiner">
          <AccountTitle title="Продавец" icon={<IconPencil />} />
          <IconStarAccount />
          <span className="account-company-buyer__rating">5,0</span>
        </div>
        <form className="account-company-buyer__form">
          <h2 className="account-company-buyer__title">Данные покупателя</h2>
          <AccountField label="Способ оплаты" />
          <AccountField label="Счет" placeholder="000000000 0000" type="number" />
          <AccountField label="ИНН" placeholder="000000000 0000" type="number" />
          <AccountField label="Регион доставки" placeholder="Город" type="text" />
          <h2 className="account-company-buyer__title">
            Контакты
            <InfoToolTip />
          </h2>
          <AccountField label="Почта" placeholder="Почта" type="email" icon={<IconMail />} />
          <AccountField label="Телефон" placeholder="Телефон" type="tel" icon={<IconPhone />} />
        </form>
      </div>
    </section>
  );
};

export default AccountCompanyBuyer;
