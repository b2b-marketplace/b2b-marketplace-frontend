import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { Preloader } from '../../../shared/ui/Preloader';
import { formatDateAsDDMMYY } from '../../../shared/lib/utils';
import * as AppApi from '../../../shared/api/AppApi';
import { ButtonBack } from '../../../features/app/Button';

import './OrderDetailsPage.scss';

const OrderDetailsPage = () => {
  const { auth_token } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [order, setOrder] = useState({});
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // const orderId = params.get('id');

  const [preloaderPage, setPreloaderPage] = useState(true);
  useEffect(() => {
    AppApi.orders
      .getOrder(auth_token, id)
      .then((res) => {
        if (res) {
          console.log(res);
          setOrder(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloaderPage(false));
  }, [id]);

  if (preloaderPage) return <Preloader />;

  return (
    <div className="order-details-page">
      <div className="order-details-page__header">
        <div className="order-details-page__header-container">
          <ButtonBack />
          <div className="order-details-page__order-info">
            <div className="order-details-page__order-info-date-number">
              <span>Заказ № {order.id}</span>
              <span className="order-details-page__order-info-date">
                {formatDateAsDDMMYY(order.created_at)}
              </span>
            </div>
            <div className="order-details-page__order-info-supplier">
              Поставщик: <span className="order-details-page__supplier_name">Планета</span>
            </div>
          </div>
        </div>
        <div className="order-details-page__repeat-order">Повторить заказ</div>
      </div>
      <div className="order-details-page__products-container">
        <h2 className="order-details-page__products-title">Детали заказа</h2>
        <div className="order-details-page__product-list"></div>
      </div>
    </div>
  );
};

export { OrderDetailsPage };
