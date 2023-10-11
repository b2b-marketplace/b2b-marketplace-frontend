// Api для получения информации из общей базы данных продуктов
// import { PRODUCTS_BASE_URL } from './constants.js';

class ProductsApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
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
}

const productsApi = new ProductsApi({
  serverUrl: `${process.env.REACT_APP_API_URL}/v1/products/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default productsApi;
