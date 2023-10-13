import React from 'react';

import IconCard from '../UI/Icon/Icon_card';
import IconDiscountLight from '../UI/Icon/Icon_discount_light';
import IconSafety from '../UI/Icon/Icon_safety';
import IconTimer from '../UI/Icon/Icon_timer';

import './PlatformBenefits.scss';

const PlatformBenefits = ({ className }) => {
  return (
    <section className={`platform-benefits ${className || ''}`}>
      <ul className="platform-benefits__list">
        <li className="platform-benefits__item">
          <IconSafety />
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Безопасность</h4>
            <p className="platform-benefits__text">Авторизуйтесь, совершайте безопасные сделки</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconCard />
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Лучшие цены</h4>
            <p className="platform-benefits__text">Сравнивайте предложения и выбирайте выгодные</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconTimer />
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Экономьте время</h4>
            <p className="platform-benefits__text">Оформляйте заказ в несколько кликов</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconDiscountLight />
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Акции и скидки</h4>
            <p className="platform-benefits__text">Узнавайте первыми о скидках и новинках</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PlatformBenefits;
