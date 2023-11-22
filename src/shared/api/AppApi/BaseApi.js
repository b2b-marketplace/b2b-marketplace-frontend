export default class BaseApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._token = false;
  }

  setToken(token) {
    this._token = token;
  }

  getToken() {
    return this._token;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res);
  }

  _request(url, options) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }
}
