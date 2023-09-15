// Api для получения информации из общей базы данных продуктов
import { PRODUCTS_BASE_URL } from './constants.js';

class AuthApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  }
  // проверка статуса
  _ckeckOk = (res) => res.ok ? res.json() : Promise.reject(res.status);
  // метод отправки запросов
  _fetcher(method, path, body) {
    // конфигурация объекта запроса
    const reqOptions = {
      method: method,
      headers: this._headers,
    };
    if (body) reqOptions.body = JSON.stringify(body);

    return fetch(`${this._serverUrl}${path}`, reqOptions).then(this._ckeckOk);
  }
  // регистрация компании
  registerCompany = (companyData) => this._fetcher('POST', '/users/companies', companyData);
  login = (loginData) => this._fetcher('POST', '/auth/token/login', loginData);
}

const authApi = new AuthApi({
  serverUrl: PRODUCTS_BASE_URL + '/v1',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default authApi;
