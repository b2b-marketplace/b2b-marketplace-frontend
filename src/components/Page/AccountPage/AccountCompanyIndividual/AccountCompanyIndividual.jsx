import React from 'react';
import './AccountCompanyIndividual.scss';
import SidebarLeft from '../../../SidebarLeft/SidebarLeft';
import AccountTitle from '../../../UI/Account/AccountTitle/AccountTitle';
import IconPencil from '../../../UI/Icon/Icon_pencil';
import AccountInputField from '../../../UI/Account/AccountInputField/AccountInputField';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import IconPhone from '../../../UI/Icon/Icon_phone';
import IconMail from '../../../UI/Icon/Icon_mail';
import BiBag from '../../../UI/Icon/Icon_bibag';
import IconPackage from '../../../UI/Icon/Icon_package';
import IconBag from '../../../UI/Icon/Icon_bag';
import IconMessage from '../../../UI/Icon/Icon_message';
import IconLock from '../../../UI/Icon/Icon_lock';
import IconTrash from '../../../UI/Icon/Icon_trash';
import IconExit from '../../../UI/Icon/Icon_exit';
import IconHearth from '../../../UI/Icon/Icon_hearth';
import IconInfoFil from '../../../UI/Icon/Icon_info_fill';

const AccountCompanyBuyer = () => {
  const menuItems = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Закупки' },
    {
      icon: <IconHearth className={'account-company-buyer__icon'} />,
      link: '#',
      label: 'Избранное',
    },
    { icon: <IconBag />, link: '#', label: 'Корзина' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  return (
    <section className="account-company-buyer">
      <SidebarLeft
        icon1={<IconTrash />}
        text1={'Выйти'}
        menuItems={menuItems}
        icon2={<IconExit />}
        text2={'Удалить аккаунт'}
        phone="8-800-800-00-00"
      />
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
          <AccountInputField label="Телефон" placeholder="Телефон" type="tel" icon={<IconPhone />} />
        </form>
      </div>
    </section>
  );
};

export default AccountCompanyBuyer;
