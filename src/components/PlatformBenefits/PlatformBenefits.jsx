import React from 'react';
import IconSafety from "../Icon/Icon_safety";
import "./PlatformBenefits.scss";
import IconRuble from "../Icon/Icon_ruble";
import IconTimer from "../Icon/Icon_timer";
import IconDiscountLight from "../Icon/Icon_discount_light";

const PlatformBenefits = () => {

  return (
    <section className="platform-benefits">
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
            <p className="platform-benefits__text">Сравнивайте предложения и&nbsp;выбирайте самые выгодные</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconTimer className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Экономия времени</h4>
            <p className="platform-benefits__text">Оформляйте заказ в&nbsp;несколько кликов в&nbsp;любое удобное время</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconDiscountLight className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Еженедельные акции</h4>
            <p className="platform-benefits__text">Узнавайте первыми о&nbsp;скидках и&nbsp;новинках поставщиков</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PlatformBenefits;
