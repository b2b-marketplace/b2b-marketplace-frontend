import React from 'react';

import { MultiSelectPanel } from '../../../entities/app';
import {
  FavoriteProductsList,
  useCheckBoxList,
  useGetFavoritesList,
} from '../../../entities/product';
import { LoadMoreButton } from '../../../features/app/Button';
import { EmptyListMessage } from '../../../shared/ui/EmptyListMessage';
import { Preloader } from '../../../shared/ui/Preloader';

import './FavoriteProductsDashboard.scss';

const FavoriteProductsDashboard = () => {
  const { fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, favoritesList } =
    useGetFavoritesList();

  const {
    isSelectItems,
    setIsSelectItems,
    handleClickCheckbox,
    handleClickSelectAll,
    isSelectAll,
  } = useCheckBoxList(favoritesList);

  if (isFetching) return <Preloader />;

  if (!favoritesList || !favoritesList.length)
    return <EmptyListMessage>Список избранного пуст</EmptyListMessage>;

  return (
    <div className="favorite-products-dashboard">
      <MultiSelectPanel
        isChecked={isSelectAll}
        handleClickSelectAll={handleClickSelectAll}
        onSetIsSelectItems={setIsSelectItems}
        isSelectItems={isSelectItems}
      />

      <FavoriteProductsList
        isSelectItems={isSelectItems}
        handleClickCheckbox={handleClickCheckbox}
        list={favoritesList}
      />

      {isFetchingNextPage && <Preloader />}
      {hasNextPage && !isFetchingNextPage && (
        <LoadMoreButton onClick={fetchNextPage} disabled={isFetching}>
          Смотреть ещё
        </LoadMoreButton>
      )}
    </div>
  );
};

export { FavoriteProductsDashboard };
