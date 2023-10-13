import React from 'react';

import './OrderDetailHeader.scss';

const OrderDetailHeader = ({ title, ...props }) => {
  return (
    <div className="order-detail-header">
      <h3 className="order-detail-header__title">{title}</h3>
      {props.children}
    </div>
  );
};

export default OrderDetailHeader;
