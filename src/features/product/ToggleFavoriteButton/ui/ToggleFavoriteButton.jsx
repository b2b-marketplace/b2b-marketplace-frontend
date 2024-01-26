import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';

import IconHearth from '../../../../components/UI/Icon/Icon_hearth';
import IconHearthBlack from '../../../../components/UI/Icon/Icon_hearth-black';
import { productModel } from '../../../../entities/product';

import './ToggleFavoriteButton.scss';

const ToggleFavoriteButton = ({
  productId,
  onClick = () => {},
  className,
  isFavorite,
  authToken,
}) => {
  const dispatch = useDispatch();

  const handleToggleFavorites = async () => {
    onClick();

    const fetchAction = isFavorite
      ? productModel.fetchDelFavorite({ authToken, productId })
      : productModel.fetchSetFavorite({ authToken, productId });

    const res = await dispatch(fetchAction);

    if (!res?.status?.ok && res?.error?.message) {
      console.log(res.error.message);
    }
  };

  return (
    <button
      className={clsx('toggle-favorite-button', className)}
      onClick={handleToggleFavorites}
      type="button"
    >
      {isFavorite ? <IconHearthBlack /> : <IconHearth />}
    </button>
  );
};

export { ToggleFavoriteButton };
