// Api для получения информации из общей базы данных продуктов
import { API_URL } from './constants.js';

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
  getProducts() {
    return this._request(this._serverUrl, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const productsApi = new ProductsApi({
  serverUrl: API_URL + '/v1/products/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default productsApi;
