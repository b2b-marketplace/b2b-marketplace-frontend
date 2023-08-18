import React from 'react';
import Tooltip from "../../../../UI/Tooltip/Tooltip";
import IconInfoFill from "../../../../Icon/Icon_info_fill";
import { Button } from "../../../../UI/Button/Button";
import "./OrderDetail.scss";

const OrderDetail = ({ className, ...props }) => {
  return (
    <div className={`order-detail ${className ? className : ''}`}>
      <div className="order-detail__header">
        <h3 className="order-detail__title">Детали заказа</h3>
        <Tooltip position="top" tooltipContent={<>Выбрать способ и адрес доставки вы сможете на этапе оформления заказа</>}>
          <IconInfoFill className="order-detail__icon-info"/>
        </Tooltip>
      </div>
      <div className="order-detail__total">
        <div className="order-detail__total-label">
          Итого:
        </div>
        <div className="order-detail__total-content">
          <p className="order-detail__total-suppliers">2 поставщика</p>
          <p className="order-detail__total-product">20 товаров</p>
        </div>
      </div>
      <div className="order-detail__price-total">80 000 ₽</div>
      <div className="order-detail__buttons">
        <Button size="xxxl" primary={false} border={true} label={'Опубликовать'}>Перейти к оформлению</Button>
        <Button size="xxxl" primary={true} border={true} label={'Опубликовать'}>В рассрочку или кредит</Button>
      </div>
    </div>
  );
};

export default OrderDetail;
