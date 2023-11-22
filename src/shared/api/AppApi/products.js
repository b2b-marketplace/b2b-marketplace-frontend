// Api для получения информации из общей базы данных продуктов
// import { PRODUCTS_BASE_URL } from './constants.js';

import BaseApi from './BaseApi';

class Products extends BaseApi {
  constructor({ serverUrl, headers }) {
    super({ serverUrl, headers });
  }

  getProducts(page = 1) {
    const url = `${this._serverUrl}?page=${page}`;
    return this._request(url, {
      method: 'GET',
      headers: this._headers,
    });
  }

  getProductById(productIds) {
    let path = `${this._serverUrl}?ids=${productIds}`;

    if (Array.isArray(productIds)) {
      const productIdsString = productIds.join(',');
      path = `${this._serverUrl}?ids=${productIdsString}`;
    }

    return this._request(path, {
      method: 'GET',
      headers: this._headers,
    });
  }

  getProductsFavorites(page = 1) {
    const url = `${this._serverUrl}?page=${page}`;
    return this._request(url, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const products = new Products({
  serverUrl: `${process.env.REACT_APP_API_URL || ''}/api/v1/products/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { products };
