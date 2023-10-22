import React from 'react';

import { formatDateUnixTimestamp } from '../../../../shared/lib/utils';

import './DeliveryWarehouseAddress.scss';

const DeliveryWarehouseAddress = ({ children, stock }) => {
  return (
    <div className="delivery-warehouse-address">
      <img className="delivery-warehouse-address__image" src={stock.icon} alt={stock.name} />
      <div className="delivery-warehouse-address__content">
        <span>
          {stock.city}, {stock.address}
        </span>
        <span className="delivery-warehouse-address__dalavery-date">
          Ориентировочная дата доставки: <b>{formatDateUnixTimestamp(stock.deliveryDate)}</b>
        </span>
      </div>
      {children}
    </div>
  );
};

export default DeliveryWarehouseAddress;
