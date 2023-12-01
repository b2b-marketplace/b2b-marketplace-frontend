export default class BaseApi {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
    this._token = false;
  }

  async _checkResponse(res) {
    if (res.ok) {
      const contentLength = res.headers.get('content-length');
      return contentLength === '0' ? {} : res.json();
    } else {
      const error = await res.json();
      throw new Error(error);
    }
  }

  _request(url, options) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }
}
