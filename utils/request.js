const request = require('request-promise');
const { logger } = require('../config/winston');

class Service {
  constructor() {
    const service = request;
    this.service = service;
  }

  async googlePost(options) {
    const result = await this.service(options);
    return result;
  }

  async get(endpoint, payload) {
    console.log('get>', endpoint);

    const result = await this.service({
      method: 'GET',
      uri: endpoint,
      headers:
            {
              'cache-control': 'no-cache',
              Connection: 'Keep-Alive',
            },
      json: true,
    });

    console.log('get result>', result);
    // logger.debug('result> %o', result.data);
    return result.data;
  }

  async post(endpoint, payload) {
    console.log('post endpoint>', endpoint);
    // console.log('payload', payload);

    const result = await this.service({
      method: 'POST',
      uri: endpoint,
      headers:
            {
              'cache-control': 'no-cache',
              Connection: 'Keep-Alive',
            },
      body: payload,
      json: true,
    });

    // logger.debug('result> %o', result.data);
    console.log('result', result);
    return result;
  }

  async formPost(endpoint, form) {
    const result = await this.service({
      method: 'POST',
      uri: endpoint,
      form,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return result;
  }
}

module.exports = new Service();