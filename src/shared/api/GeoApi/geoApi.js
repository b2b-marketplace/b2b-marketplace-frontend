// Api для получения информации о местоположении пользователя
// import { GEOLOCATION_API_URL } from './constants.js';

class GeoApi {
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

  getCity() {
    return this._request(this._serverUrl, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const geoApi = new GeoApi({
  serverUrl:
    process.env.REACT_APP_GEOLOCATION_API_URL ||
    'https://ipwho.is/?lang=ru&output=json&fields=city',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { geoApi };
