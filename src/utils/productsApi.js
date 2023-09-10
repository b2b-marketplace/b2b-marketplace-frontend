// Api для получения информации из общей базы данных продуктов
import { PRODUCTS_BASE_URL } from './constants.js';
import { isArray } from "@craco/craco/dist/lib/utils";

class ProductsApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    // функция проверки статуса ответа
    return res.ok
      ? res.json()
      : Promise.reject(`${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    // функция отправки запроса с проверкой ответа
    return fetch(url, options).then(this._checkResponse);
  }

  // получение данных о фильмах
  getProducts(productIds) {
    let path = this._serverUrl;
    if (isArray(productIds)) {
      const productIdsString = productIds.join(",");
      path = `${this._serverUrl}?ids=${productIdsString}`;
    }
    return this._request(path, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const productsApi = new ProductsApi({
  serverUrl: PRODUCTS_BASE_URL + '/v1/products/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default productsApi;