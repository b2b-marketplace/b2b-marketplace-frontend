import React from 'react';
import clsx from 'clsx';

import { AppImage } from '../../../../../shared/ui/AppImage';
import { priceFormat } from '../../../../../shared/lib/utils';
import VendorCode from '../../../../../components/ProductElements/VendorCode/VendorCode';

import imageStub from '../../../../../images/basket/Stub_132_128.jpg';

import './OrderProductItem.scss';

const OrderProductItem = React.memo(({ item, className, index }) => {
  const { product } = item;
  const imageSrc = product.image && product.image ? product.image : imageStub;
  //console.log(item);
  // console.log(product);
  return (
    <div className={clsx('order-product-item', className)}>
      <div className="order-product-item__number">{index}</div>
      <div className="order-product-item__details">
        <AppImage
          loading="lazy"
          className="order-product-item__image"
          imageSrc={imageSrc}
          imageAlt={product.name}
          radius="radius-20"
          border
        />
        <VendorCode vendorCode={product.id} />
      </div>
      <div className="order-product-item__description"> {product.name}</div>
      <div className="order-product-item__quantity">{item.quantity} шт.</div>
      <div className="order-product-item__price">{priceFormat(item.price)} &#8381;</div>
    </div>
  );
});

export { OrderProductItem };
