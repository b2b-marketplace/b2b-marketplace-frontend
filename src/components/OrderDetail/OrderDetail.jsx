import React from 'react';
import './OrderDetail.scss';

/**
 *
 *
 * @param className
 * @param props
 * @returns {JSX.Element}
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const OrderDetail = ({ className, ...props }) => {
  return (
    <div className={`order-detail ${className || ''}`}>
      <div className="order-detail__container">{props.children}</div>
    </div>
  );
};

export default OrderDetail;
