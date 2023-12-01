import React from 'react';

import BannerAdvertising from '../../components/Banners/BannerAdvertising/BannerAdvertising';
import Basket from '../../components/Basket/Basket';
import { Main } from '../../shared/ui/Layout';

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
    <Main className="basket-page">
      <Basket className="basket-page__basket" />
      <BannerAdvertising className="basket-page__banner" />
    </Main>
  );
};

export default BasketPage;
