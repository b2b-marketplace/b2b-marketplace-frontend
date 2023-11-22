import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

import { Preloader } from '../../../shared/ui/Preloader';
import { EmptyListMessage } from '../../../shared/ui/EmptyListMessage';
import { getCalculateProductInfo } from '../../../shared/lib/utils';
import { ButtonBack } from '../../../features/order';
import {
  OrderDetailsInfo,
  OrderProductList,
  OrderTotalDetails,
  useGetOrder,
} from '../../../entities/order';

import './OrderDetailsPage.scss';

const OrderDetailsPage = () => {
  const { id } = useParams();

  const { data: order, isError, isLoading, productList, companyName } = useGetOrder(+id);

  if (isLoading) return <Preloader />;

  if (isError || !order) {
    return (
      <>
        <ButtonBack />
        <EmptyListMessage>Заказ не найден</EmptyListMessage>
      </>
    );
  }

  const { totalPrice, totalQuantity } = getCalculateProductInfo(productList);

  return (
    <div className="order-details-page">
      <div className="order-details-page__header">
        <div className="order-details-page__header-container">
          <ButtonBack />
          <OrderDetailsInfo companyName={companyName} order={order} />
        </div>
        {/*<div className="order-details-page__repeat-order">Повторить заказ</div>*/}
      </div>

      <div className="order-details-page__products-container">
        <h2 className="order-details-page__products-title">Детали заказа</h2>
        <OrderProductList products={productList} />
        <div className="order-details-page__total-details">
          <OrderTotalDetails totalQuantity={totalQuantity} totalPrice={totalPrice} />
          <div className="order-details-page__comment">
            <h3 className="order-details-page__comment-title">Комментарий к заказу</h3>
            <div className="order-details-page__comment-text">Пусто</div>
          </div>
          <div className="order-details-page__delivery"></div>
        </div>
      </div>
    </div>
  );
};

export { OrderDetailsPage };
