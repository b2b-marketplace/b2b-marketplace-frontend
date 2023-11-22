// import { PRODUCTS_BASE_URL } from './constants';

import BaseApi from './BaseApi';

class User extends BaseApi {
  constructor({ serverUrl, headers }) {
    super({ serverUrl, headers });
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

  addOrder(token, order) {
    const url = `${this._serverUrl}/orders/`;
    return this._request(url, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(order),
    });
  }
}

const user = new User({
  serverUrl: `${process.env.REACT_APP_API_URL || ''}/api/v1`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export { user };
