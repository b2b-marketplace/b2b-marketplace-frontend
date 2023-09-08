import React, { useState } from 'react';
import './AccountSellerProfile.scss';
<<<<<<< Updated upstream:src/Pages/AccountPage/AccountSellerProfile/AccountSellerProfile.jsx
import IconMail from '../../../components/UI/Icon/Icon_mail';
import IconPhone from '../../../components/UI/Icon/Icon_phone';
import AccountTitle from '../../../components/UI/Account/AccountTitle/AccountTitle';
import Tooltip from '../../../components/UI/Tooltip/Tooltip';
import AccountInputField from '../../../components/UI/Account/AccountInputField/AccountInputField';
import IconPencil from '../../../components/UI/Icon/Icon_pencil';
import IconInfoFil from '../../../components/UI/Icon/Icon_info_fill';
=======
import IconMail from '../../../UI/Icon/Icon_mail';
import IconPhone from '../../../UI/Icon/Icon_phone';
import AccountTitle from '../../../UI/Account/AccountTitle/AccountTitle';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import AccountInputField from '../../../UI/Account/AccountInputField/AccountInputField';
import IconInfoFil from '../../../UI/Icon/Icon_info_fill';
import useValidation from '../../../../hooks/useValidation';
import { Button } from '../../../../components/UI/Button/Button';
>>>>>>> Stashed changes:src/components/Page/AccountPage/AccountSellerProfile/AccountSellerProfile.jsx

const AccountSellerProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDisadled, setIsDisadled] = useState(true);
 
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
    <section className="account-seller-profile">
      <div className="account-seller-profile__blok">
        <AccountTitle name="ООО «ОРСО»" title="Продавец" button="Редактировать" /* icon={<IconPencil />} */ />

        <form className="account-seller-profile__form" >
          <div className='account-seller-profile__title-group'>
            <h2 className="account-seller-profile__title">О компании</h2>
            <p className="account-seller-profile__info">Эта информация отображается на странице вашей компании</p>
          </div>
          <textarea
            className="account-seller-profile__description"
            name="comment"
            cols="40"
            rows="7"
            placeholder="Описание компании">Наша компания с 1999 г. производит верхнюю одежду для детей от 0 до 16 лет. У нас есть фабрика полного цикла — разрабатываем дизайн и выпускаем готовые изделия. Все циклы производства проходят в одном здании. Два раза в год выпускаем новые коллекции — зимние и весенние. Также дважды в год участвуем в международной выставке CJF Детская мода в Москве. Представляем два бренда ARTEL SPORT и ORSO BIANCO. Ассортимент очень разнообразен как по моделям, так и по размерному ряду.</textarea>
          <div className="account-seller-profile__control">
            <div className='account-seller-profile__title-group'>
              <h2 className="account-seller-profile__title">Данные продавца</h2>
              <p className="account-seller-profile__info">Их видите только вы и служба поддержки B2Buy.ru</p>
            </div>
            <fieldset className="account-seller-profile__field" disabled={isDisadled}>
              <AccountInputField label="Счет" placeholder="000000000 0000" type="number" isDisabled={isDisadled}/>
              <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" isDisabled={isDisadled}/>
              <AccountInputField label="ОГРН" placeholder="000000000 0000" type="number" isDisabled={isDisadled}/>
              <AccountInputField label="Регион доставки" placeholder="Город" type="text" isDisabled={isDisadled}/>
            </fieldset>
          </div>

          <div className='account-buyer-profile__title-group'>
            <h2 className="account-seller-profile__title">
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
          <fieldset className="account-seller-profile__field" disabled={isDisadled}>
            <AccountInputField label="Почта" placeholder="Почта" type="email" icon={<IconMail />} isDisabled={isDisadled}/>
            <AccountInputField label="Телефон" placeholder="Телефон" type="tel" icon={<IconPhone /> } isDisabled={isDisadled}/>
          </fieldset>
          
          {isEditMode ? (
            <div className='account-buyer-profile__button-container'>
              <Button size="xl" mode="secondary" type="submit" onClick={handleEdit}>Сохранить</Button>
              <Button size="xl" mode="secondary" type="button" onClick={cancelEdit}>Отменить</Button>
            </div>
          ) : (
            <div className='account-buyer-profile__button-container'>
              <Button size="xl" mode="secondary" type="button" onClick={editInfo}>Редактировать</Button>
            </div>
          )
          }

        </form>
      </div>
    </section>
  );
};

export default AccountSellerProfile;
