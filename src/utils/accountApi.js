import { PRODUCTS_BASE_URL } from './constants';

class AccountApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._token = false;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  setToken(token) {
    this._token = token;
  }

  getUser(token) {
    const url = `${this._serverUrl}/users/me/`;
    return this._request(url, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Token ${token}`,
      },
    });
  }
}

const accountApi = new AccountApi({
  serverUrl: PRODUCTS_BASE_URL + '/v1',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default accountApi;
