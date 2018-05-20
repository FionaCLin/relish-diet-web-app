'use strict';

const Path = require('path');

module.exports = function (env) {

  let nickname = 'dev';
  let mode = 'dev';

  if (!env) {
    env = 'dev';
  }

  switch (env) {
    case 'test':
      mode = 'test';
      break;
    default:
      mode = 'dev';
  }

  let servers = {
    user: {
      url: 'https://fresh-fridge-api.com',
      host: '0.0.0.0',
      port: 3002
    },
    ui: {
      url: 'https://fresh-fridge.com',
      host: '0.0.0.0',
      port: 4002
    }
  };

  let services = {
    remoteFoodIngredient: {
      host: 'http://xxxx.xyz.com',
      token: null
    }

  };

  let storage = {
    method: 'fs',
    fs: {
      root: Path.join(__dirname, '/..', '/storage/', mode)
    },
    s3: {
      user: '',
      key: '',
      secret: '',
      region: '',
      bucket: '',
      prefix: mode
    }
  };


  // postgres
  let db = {
    host: '127.0.0.1',
    port: 5432,
    user: nickname,
    password: nickname,
    database: "fresh_fridge_" + mode,
    max: 5,
    idleTimeoutMillis: 300000,
    connectionTimeoutMillis: 200000
  };
  servers.user.port = (env == 'production') ? 3001 : 3002;

  return {
    env: env,
    nickname: nickname,
    db: db,
    servers: servers,
    services: services
  };
};
