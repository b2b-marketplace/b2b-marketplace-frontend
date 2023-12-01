import React from 'react';

import { FavoriteProductsDashboard } from '../../../widgets/product';

import './FavoriteListPage.scss';

const FavoriteListPage = () => {
  return (
    <section className="favorite-list-page">
      <h1 className="favorite-list-page__title">Избранное</h1>
      {<FavoriteProductsDashboard />}
    </section>
  );
};

export { FavoriteListPage };
