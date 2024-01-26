import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../components/UI/Button/Button';
import { basketModel } from '../../../../entities/basket';

const ToggleBasketItemButton = ({ productId, quantity }) => {
  const isItemInBasket = basketModel.useGetBasketItem(productId);
  const dispatch = useDispatch();
  const handleSelect = () => {
    isItemInBasket
      ? dispatch(basketModel.deleteProduct({ productIds: productId }))
      : dispatch(basketModel.addProduct({ productIds: productId, quantity }));
  };

  return (
    <Button size="xs" onClick={handleSelect} pressed={!!isItemInBasket}>
      {isItemInBasket ? 'В корзине' : 'В корзину'}
    </Button>
  );
};

export { ToggleBasketItemButton };
