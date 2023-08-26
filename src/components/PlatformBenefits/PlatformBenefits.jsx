import React from 'react';
import IconSafety from "../UI/Icon/Icon_safety";
import "./PlatformBenefits.scss";
import IconRuble from "../UI/Icon/Icon_ruble";
import IconTimer from "../UI/Icon/Icon_timer";
import IconDiscountLight from "../UI/Icon/Icon_discount_light";

const PlatformBenefits = ({ className }) => {

  return (
    <section className={`platform-benefits ${className ? className : ''}`}>
      <ul className="platform-benefits__list">
        <li className="platform-benefits__item">
          <IconSafety className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Безопасность</h4>
            <p className="platform-benefits__text">Авторизуйтесь, чтобы совершать безопасные сделки</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconRuble className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Выбор лучших цен</h4>
            <p className="platform-benefits__text">Сравнивайте и выбирайте выгодные</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconTimer className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Экономия времени</h4>
            <p className="platform-benefits__text">Оформляйте заказ в несколько кликов</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconDiscountLight className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Еженедельные акции</h4>
            <p className="platform-benefits__text">Узнавайте первыми о скидках и новинках</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PlatformBenefits;
