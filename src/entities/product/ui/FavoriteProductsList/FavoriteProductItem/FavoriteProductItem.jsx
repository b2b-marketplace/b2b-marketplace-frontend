import clsx from 'clsx';
import React from 'react';

import { ToggleBasketItemButton } from '../../../../../features/product';
import { AppImage } from '../../../../../shared/ui/AppImage';
import { Checkbox } from '../../../../../shared/ui/Checkbox';
import { VendorCode } from '../../../../../shared/ui/VendorCode';

import imageStub from '../../../../../images/basket/Stub_132_128.jpg';

import './FavoriteProductItem.scss';

const FavoriteProductItem = ({ handleClickCheckbox, checkboxChecked, item, className }) => {
  const imageSrc = item.images && item.images.length > 0 ? item.images[0].image : imageStub;
  const companyName = item.seller.name;
  return (
    <div className={clsx('favorite-product-item', className)}>
      <Checkbox checked={checkboxChecked} onClick={() => handleClickCheckbox(item.id)} />
      <div className="favorite-product-item__container">
        <div className="favorite-product-item__product-info">
          <AppImage
            className="favorite-product-item__image"
            radius="radius-20"
            border
            imageSrc={imageSrc}
          />
          <VendorCode vendorCode={item.id} />
        </div>
        <div className="favorite-product-item__company-product-info">
          <div className="favorite-product-item__product_name">{item.name}</div>
          <div className="favorite-product-item__company_name">{companyName}</div>
        </div>
        <div className="favorite-product-item__quantity">От {item.wholesale_quantity} шт.</div>
        <div className="favorite-product-item__price">{item.price}&#8381;</div>
        {item.wholesale_quantity > item.quantity_in_stock ? (
          <ToggleBasketItemButton productId={item.id} quantity={item.wholesale_quantity} />
        ) : (
          <div className="favorite-product-item__sold-out">Товар Закончился</div>
        )}
      </div>
    </div>
  );
};

export { FavoriteProductItem };
