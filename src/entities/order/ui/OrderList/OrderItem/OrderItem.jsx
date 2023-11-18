import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { AppLink } from '../../../../../shared/ui/AppLink';
import { AppImage } from '../../../../../shared/ui/AppImage';
import {
  formatDateAsDDMMYY,
  getCalculateProductInfo,
  getStatusName,
  priceFormat,
} from '../../../../../shared/lib/utils';

import imageStub from '../../../../../images/basket/Stub_132_128.jpg';

import './OrderItem.scss';

/**
 * Компонент, представляющий элемент заказа в списке заказов.
 *
 * @param {object} item - Информация о заказе.
 * @returns {JSX.Element}
 */
const OrderItem = ({ item }) => {
  const { id, created_at, status, order_products } = item;
  const companyName = order_products[0].product.supplier.name;
  const { totalPrice } = getCalculateProductInfo(order_products);
  return (
    <div className="order-item">
      <div className="order-item__date-order">
        <div className="order-item__order-date-create">{formatDateAsDDMMYY(created_at)}</div>
        <AppLink to={`/account/orders/${id}`}>
          <div className="order-item__order-number">№{id}</div>
        </AppLink>
      </div>
      <div className="order-item__company-info">
        <AppImage
          className="order-item__company-logo"
          radius="radius-50"
          border
          imageSrc={imageStub}
        />
        <div className="order-item__company-name">{companyName}</div>
      </div>
      <div className="order-item__delivery-date">14.08.23</div>
      <div className="order-item__delivery-address">
        г. Санкт-Петербург, пр-кт Большевиков, 11, к2, пом. 81
      </div>
      <div className="order-item__total-price">{priceFormat(totalPrice)} &#8381;</div>
      <div className="order-item__status">
        <div className={clsx('order-item__box', `order-item__box_${status.toLowerCase()}`)}></div>
        {getStatusName(status)}
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    order_products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          supplier: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
          }).isRequired,
          sku: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          image: PropTypes.string,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export { OrderItem };
