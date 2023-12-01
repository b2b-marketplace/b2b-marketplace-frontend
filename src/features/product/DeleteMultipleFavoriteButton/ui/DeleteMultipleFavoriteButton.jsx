import React from 'react';
import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

import IconTrash from '../../../../components/UI/Icon/Icon_trash';
import * as AppApi from '../../../../shared/api/AppApi';

import './DeleteMultipleFavoriteButton';

const DeleteMultipleFavoriteButton = ({ onSetIsSelectItems, items }) => {
  const { auth_token: authToken } = useSelector((state) => state.auth);
  const queryClient = new useQueryClient();
  const { mutate } = useMutation(
    (selectedItems) => {
      const deletePromises = selectedItems.map((productId) =>
        AppApi.products.delFavoritesProduct(authToken, productId)
      );

      return Promise.all(deletePromises);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['favorites']);
      },
    }
  );

  const handleOnClick = (e) => {
    if (typeof onSetIsSelectItems === 'function') onSetIsSelectItems([]);
    mutate(items);
  };
  return (
    <button type="button" onClick={handleOnClick} className="multi-select-panel__button">
      <IconTrash className="multi-select-panel__icon-trash" />
      Удалить выбранные
    </button>
  );
};

export { DeleteMultipleFavoriteButton };
