// Api для получения информации из общей базы данных продуктов
import { parseErrors } from './authConstatnts.js';
import { PRODUCTS_BASE_URL } from './constants.js';

class AuthApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._authHeaders = headers;
  }

  setToken = (token) => ({ ...this._authHeaders, autorazation: `Bearer ${token}` });

  // проверка статуса
  _checkIsGoodStatus = (res) => res?.ok || (res.status < 300 && res.status >= 200);

  _ckeckOk = (res) => {
    if (this._checkIsGoodStatus(res)) {
      return res.status === 204 ? res : res.json();
    }
    return res.json().then(err => {
      const parsedErrrors = parseErrors(err);
      const keyList = Object.keys(parsedErrrors);
      if (keyList.length > 1) {
        return Promise.reject(parsedErrrors[keyList[0]]);
      }
      if (keyList.length === 0) {
        return Promise.reject(res.status);
      }
      
      return Promise.reject(parsedErrrors);
    });
  };

  // метод отправки запросов
  _fetcher(method, path, body, isNotAuth) {
    // конфигурация объекта запроса
    const reqOptions = {
      method: method,
      headers: isNotAuth ? this._headers : this._authHeaders,
    };
    if (body) reqOptions.body = JSON.stringify(body);

    return fetch(`${this._serverUrl}${path}`, reqOptions).then(this._ckeckOk);
  }

  // регистрация компании
  registerCompany = (companyData) => this._fetcher('POST', '/users/companies/', companyData, true);

  login = (loginData) => this._fetcher('POST', '/auth/token/login/', loginData, true);
  activate = (activationData) => this._fetcher('POST', '/users/activation/', activationData, true);
}

const authApi = new AuthApi({
  serverUrl: PRODUCTS_BASE_URL + '/v1',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default authApi;
