import './AccountCompanyBuyer.scss';
import АccountBar from '../AccountBar/AccountBar';
import AccountTitle from '../AccountTitle/AccountTitle';
import IconPencil from '../../Icon/Icon_pencil';
import IconStarAccount from '../../Icon/Icon_star-account';
import AccountField from '../AccountField/AccountField';
import InfoToolTip from '../../InfoToolTip/InfoToolTip';
import IconPhone from '../../Icon/Icon_phone';
import IconMail from '../../Icon/Icon_mail';
import BiBag from '../../Icon/Icon_bibag';
import IconPackage from '../../Icon/Icon_package';
import IconBag from '../../Icon/Icon_bag';
import IconMessage from '../../Icon/Icon_message';
import IconLock from '../../Icon/Icon_lock';
import IconTrash from '../../Icon/Icon_trash';
import IconExit from '../../Icon/Icon_exit';

const AccountCompanyBuyer = () => {
  const menuItems = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Закупки' },
    { icon: <IconBag />, link: '#', label: 'Избранное' },
    { icon: <IconBag />, link: '#', label: 'Корзина' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  return (
    <section className="account-company-buyer">
      <АccountBar
        icon1={<IconTrash />}
        text1={'Выйти'}
        menuItems={menuItems}
        icon2={<IconExit />}
        text2={'Удалить аккаунт'}
        phone="8-800-800-00-00"
      />
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
