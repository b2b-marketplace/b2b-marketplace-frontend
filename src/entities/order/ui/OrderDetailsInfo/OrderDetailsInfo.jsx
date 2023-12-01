import clsx from 'clsx';
import React from 'react';

import { formatDateAsDDMMYY } from '../../../../shared/lib/utils';

const OrderDetailsInfo = ({ order, className, companyName }) => {
  return (
    <div className={clsx('order-details-page__order-info', className)}>
      <div className="order-details-page__order-info-date-number">
        <span>Заказ № {order.id}</span>
        <span className="order-details-page__order-info-date">
          {formatDateAsDDMMYY(order.created_at)}
        </span>
      </div>
      <div className="order-details-page__order-info-supplier">
        Поставщик:&nbsp;
        <p className="order-details-page__order-info-supplier_name">{companyName}</p>
      </div>
    </div>
  );
};

export { OrderDetailsInfo };
