import React from 'react';

import BannerAdvertising from '../../components/Banners/BannerAdvertising/BannerAdvertising';
import Basket from '../../components/Basket/Basket';
import './BasketPage.scss';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const BasketPage = () => {
  return (
    <main className="basket-page">
      <Basket extraClassName="basket-page__basket" />
      <BannerAdvertising className="basket-page__banner" />
    </main>
  );
};

export default BasketPage;
