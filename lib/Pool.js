'use strict';

class Pool {
  
  constructor(options) {
    this.poolKey = options.poolKey;
    this.redisOptions = options.redisOptions;
    this.clientFactory = options.clientFactory || null;
    this.inner = options.inner;
  }
}

module.exports = Pool;
