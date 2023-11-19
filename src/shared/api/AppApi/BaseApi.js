export default class BaseApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._token = false;
  }

  _checkResponse(res) {
    // return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`);
    return res.ok ? res.json() : Promise.reject(res);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  setToken(token) {
    this._token = token;
  }

  getToken(token) {
    return this._token;
  }
}
