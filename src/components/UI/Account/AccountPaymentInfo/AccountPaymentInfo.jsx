import React, { useState } from 'react';
import './AccountPaymentInfo.scss';

const AccountPaymentInfo = ({title, image}) => {
  const [isMain, setIsMain] = useState(true);

  return (
    <section className="accountpaymentinfo">
      <h1 className="accountpaymentinfo__title">{title}</h1>
      <ul className="accountpaymentinfo__list">
        <li className="accountpaymentinfo__item">
          <div className="accountpaymentinfo__checkbox-zone">
            <div className="accountpaymentinfo__logo-block">
              <img className="accountpaymentinfo__logo" src={"../../../../images/visa.svg"} /* alt="Название платежной системы" */></img>
            </div>
            <input className="accountpaymentinfo__checkbox" type='checkbox'></input>
          </div>
          <p className="accountpaymentinfo__type">{isMain ? "Основной" : "Сделать основной"}</p>
          <div className="accountpaymentinfo__number">
            <p className="accountpaymentinfo__number"> 220220******2360</p>
            <p className="accountpaymentinfo__date">12/24</p>
          </div> 
        </li>
        <li className="accountpaymentinfo__item"></li>
        <li className="accountpaymentinfo__item"></li>
        <button className='accountpaymentinfo__add-new'></button>
      </ul>
      
    </section>
  );
};

export default AccountPaymentInfo;