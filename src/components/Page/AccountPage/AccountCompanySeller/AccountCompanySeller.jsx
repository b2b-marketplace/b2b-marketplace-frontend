import React from 'react';
import './AccountCompanySeller.scss';
import SidebarLeft from '../../../SidebarLeft/SidebarLeft';
import BiBag from '../../../UI/Icon/Icon_bibag';
import IconPackage from '../../../UI/Icon/Icon_package';
import IconBag from '../../../UI/Icon/Icon_bag';
import IconMessage from '../../../UI/Icon/Icon_message';
import IconLock from '../../../UI/Icon/Icon_lock';
import IconMail from '../../../UI/Icon/Icon_mail';
import IconPhone from '../../../UI/Icon/Icon_phone';
import AccountTitle from '../../../Account/AccountTitle/AccountTitle';
import IconStarAccount from '../../../UI/Icon/Icon_star-account';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import AccountField from '../../../Account/AccountField/AccountField';
import IconPencil from '../../../UI/Icon/Icon_pencil';
import IconTrash from '../../../UI/Icon/Icon_trash';
import IconExit from '../../../UI/Icon/Icon_exit';
import IconInfoFil from '../../../UI/Icon/Icon_info_fill';

const AccountCompanySeller = () => {
  const menuItems = [
    { icon: <BiBag />, link: '#', label: 'Моя компания' },
    { icon: <IconPackage />, link: '#', label: 'Товары' },
    { icon: <IconBag />, link: '#', label: 'Заказы' },
    { icon: <IconMessage />, link: '#', label: 'Сообщения' },
    { icon: <IconLock />, link: '#', label: 'Безопасность' },
  ];

  return (
    <section className="account-company-seller">
      <SidebarLeft
        menuItems={menuItems}
        icon1={<IconTrash />}
        text1={'Выйти'}
        icon2={<IconExit />}
        text2={'Удалить аккаунт'}
        phone="8-800-800-00-00"
      />

      <div>
        <div className="account-company-seller__conteiner">
          <AccountTitle name="ООО «Компания»" title="Продавец" icon={<IconPencil />} />
          <IconStarAccount />
          <span className="account-company-seller__rating">5,0</span>
        </div>
        <form className="account-company-seller__form">
          <textarea
            className="account-company-seller__description"
            name="comment"
            cols="40"
            rows="3"
            placeholder="Описание компании"></textarea>
          <h2 className="account-company-seller__title">Данные продавец</h2>
          <AccountField label="Счет" placeholder="000000000 0000" type="number" />
          <AccountField label="ИНН" placeholder="000000000 0000" type="number" />
          <AccountField label="ОГРН" placeholder="000000000 0000" type="number" />
          <AccountField label="Регион доставки" placeholder="Город" type="text" />

          <h2 className="account-company-seller__title">
            Контакты
            <Tooltip
              position="right"
              tooltipContent={
                <>Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей</>
              }>
              <IconInfoFil />
            </Tooltip>
          </h2>
          <AccountField label="Почта" placeholder="Почта" type="email" icon={<IconMail />} />
          <AccountField label="Телефон" placeholder="Телефон" type="tel" icon={<IconPhone />} />
        </form>
      </div>
    </section>
  );
};

export default AccountCompanySeller;