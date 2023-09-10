import React, { useState } from 'react';
import './AccountBuyerProfile.scss';
import AccountTitle from "../../../components/UI/Account/AccountTitle/AccountTitle";
import AccountInputField from "../../../components/UI/Account/AccountInputField/AccountInputField";
import IconPhone from "../../../components/UI/Icon/Icon_phone";
import IconMail from "../../../components/UI/Icon/Icon_mail";
import { Button } from "../../../components/UI/Button/Button";

const AccountBuyerProfile = () => {
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
    <section className="account-buyer-profile">
      <div className="account-buyer-profile__blok">
        <AccountTitle name="ООО «Планета»" title="Покупатель" />
        
        <form className="account-buyer-profile__form">
          <div className="account-buyer-profile__form-block">
            <div className='account-buyer-profile__title-group'>
              <h2 className="account-buyer-profile__title">Данные покупателя</h2>
              <p className="account-buyer-profile__info">Их видите только вы и служба поддержки B2Buy.ru</p>
            </div>
            <fieldset className="account-buyer-profile__field" disabled={isDisadled}>
              <AccountInputField label="Счет" placeholder="7209176529 0000" type="number" isDisabled={isDisadled} />
              <AccountInputField label="ИНН" placeholder="000000000 0000" type="number" isDisabled={isDisadled}/>
              <AccountInputField label="Регион доставки" placeholder="Москва, Россия" type="text" isDisabled={isDisadled}/>
            </fieldset>
          </div>
          <div className="account-buyer-profile__form-block">
            <div className='account-buyer-profile__title-group'>
              <h2 className="account-buyer-profile__title">
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
            <fieldset className="account-buyer-profile__field" disabled={isDisadled}>
              <AccountInputField label="Почта" placeholder="E-mail" type="email" isDisabled={isDisadled} icon={<IconMail />}/>
              <AccountInputField label="Телефон" placeholder="Телефон" type="tel" isDisabled={isDisadled} icon={<IconPhone />}/>
            </fieldset>
          </div>
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
       
        {/* <AccountPaymentInfo title="Способы оплаты" /> */}

      </div>
    </section>
  );
};

export default AccountBuyerProfile;
