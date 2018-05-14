'use strict';

module.exports = function (env) {

  var nickname = 'dev';

  if (!env) {
    env = 'development';
  }

  var servers = {
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

  var services = {
    remoteFoodIngredient: {
      host: 'http://xxxx.xyz.com',
      token: null
    }

  };

  // postgres
  var db = {
    host: '127.0.0.1',
    port: 5432,
    user: nickname,
    password: nickname,
    database: "fresh_fridge",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
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
