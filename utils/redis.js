const redis = require('redis');
const { logger } = require('../config/winston');

const CODE = {
  ECONNREFUSED: 'ECONNREFUSED',
};

class RedisClient {
  constructor() {
    this.client = redis.createClient({
      host: process.env.REDIS_MASTER_HOST,
      port: process.env.REDIS_MASTER_PORT,
    });
    // this.slaveClient = redis.createClient(process.env.REDIS_SLAVE_PORT || '17616');
    this.slaveClient = redis.createClient(process.env.REDIS_SLAVE_PORT || '6379');

    this.client.on('error', (error) => {
      if (error.code === CODE.ECONNREFUSED) {
        logger.error(`>>> Redis Connection Failed: ${JSON.stringify(error)}`);
        return;
      }

      logger.error(error);
    });

    this.slaveClient.on('error', (error) => {
      if (error.code === CODE.ECONNREFUSED) {
        logger.error(`>>> Redis Slave(${process.env.REDIS_SLAVE_PORT}) Connection Failed: ${JSON.stringify(error)}`);
        return;
      }

      logger.error(error);
    });
  }

  getMaster() {
    return this.client;
  }

  getSlave() {
    return this.slaveClient;
  }

  async info() {
    return new Promise((resolve, reject) => {
      this.client.info((err, info) => {
        if (err) return reject(err);

        return resolve(info);
      });
    });
  }

  set(key, value, expireSeconds = 60) {
    this.client.set(key, value);

    if (expireSeconds > 0) {
      this.client.expire(key, expireSeconds);
    }
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      this.slaveClient.get(key, (err, reply) => {
        if (err) {
          return reject(err);
        }

        return resolve(reply);
      });
    });
  }
}

// module.exports = new RedisClient();