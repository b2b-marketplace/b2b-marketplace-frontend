import BaseApi from './BaseApi';

class Orders extends BaseApi {
  constructor({ serverUrl, headers }) {
    super({ serverUrl, headers });
  }

  getOrders(token, page = 0) {
    const url = `${this._serverUrl}orders/${page ? '?page=' + page : ''}`;
    return this._request(url, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Token ${token}`,
      },
    });
  }
}

const orders = new Orders({
  serverUrl: `${process.env.REACT_APP_API_URL || ''}/api/v1/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { orders };
