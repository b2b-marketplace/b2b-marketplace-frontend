import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { AppImage } from '../../../../shared/ui/AppImage';
import { formatDateAsDDMMYY, getCalculateProductInfo } from '../../../../shared/lib/utils';

import imageStub from '../../../../images/basket/Stub_132_128.jpg';

import './OrderItem.scss';

// Максимальное количество выводимых изображений в списке заказов
const maxImagesView = 1;

/**
 * Компонент, представляющий элемент заказа в списке заказов.
 *
 * @param {object} order - Информация о заказе.
 * @returns {JSX.Element}
 */
const OrderItem = ({ order }) => {
  const { id, created_at, status, order_products } = order;
  const [images, setImages] = useState([]);

  useEffect(() => {
    let productImages = order_products
      .filter((product) => product.product.image)
      .map((product) => product.product.image);

    if (productImages.length > maxImagesView) {
      productImages = productImages.slice(0, maxImagesView);
    } else if (productImages.length === 0) {
      productImages = [imageStub];
    }

    setImages(productImages);
  }, [order]);

  function getStatusName(status) {
    const statusMap = {
      Created: 'Создан',
      Updated: 'Updated',
      Paid: 'Paid',
      Transit: 'In_transit',
      Received: 'Received',
      Canceled: 'Canceled',
      Returned: 'Returned',
    };

    // Проверяем, есть ли статус в объекте statusMap
    if (status in statusMap) {
      return statusMap[status];
    } else {
      return 'Неизвестный статус';
    }
  }

  // Проверяет, является ли изображение последним
  const isLastImage = (index) => {
    return order_products.length > images.length && index === images.length - 1;
  };

  // Рендерит оверлей с количеством оставшихся изображений
  const renderImageOverlayQuantity = (index) => {
    if (isLastImage(index)) {
      return (
        <>
          <div className="order-item__product-image-overlay"></div>
          <div className="order-item__product-image-quantity">
            + {order_products.length - images.length}
          </div>
        </>
      );
    }
  };

  return (
    <div className="order-item">
      <div className="order-item__header">
        <div className="order-item__additional-info">
          <div className="order-item__order-date">{formatDateAsDDMMYY(created_at)}</div>
          <div className="order-item__order-number">№{id}</div>
        </div>
        <div className="order-item__company-info">
          <AppImage
            className="order-item__company-logo"
            radius="radius-50"
            border
            imageSrc={imageStub}
          />
          <div className="order-item__company-name">Планета</div>
        </div>
      </div>
      <div className="order-item__delivery-container">
        <div className="order-item__delivery-date-info">
          <div className="order-item__delivery-title">Дата доставки:</div>
          <div className="order-item__delivery-text">14.08.23</div>
        </div>
        <div className="order-item__delivery-address-info">
          <div className="order-item__delivery-title">Адрес доставки:</div>
          <div className="order-item__delivery-text">
            г. Санкт-Петербург, пр-кт Большевиков, 11, к2, пом. 81
          </div>
        </div>
      </div>
      <div className="order-item__product-images-container">
        {images.map((image, index) => (
          <div
            className={clsx('order-item__product-image', {
              'order-item__product-image-last': isLastImage(index),
            })}
            key={index}
          >
            <AppImage
              border
              radius="radius-20"
              className="order-item__product-image"
              imageSrc={image}
            />
            {renderImageOverlayQuantity(index)}
          </div>
        ))}
      </div>
      <div className="order-item__total-price-container">
        {getCalculateProductInfo(order_products).totalPrice} ₽
      </div>
      <div className="order-item__total-price-container">{getStatusName(status)}</div>
    </div>
  );
};

OrderItem.propTypes = {
  order: PropTypes.shape({
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
