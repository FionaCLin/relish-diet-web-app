'use strict';

module.exports = (api) => {
  let lib = api.lib;
  let auth = {};

  // token auth
  auth.strategy = (token, done) => {
    lib.users.getByToken(
      token,
      (err, res) => {
        if (err || !res) {
          return done(new Error('invalid bearer token'));
        }
        return done(null, res.token);
      });
  };

  return auth;
};
  // https://git.coolaj86.com/coolaj86/node-authenticator.js/src/branch/master/example.js
  // https://github.com/passport/express-4.x-http-bearer-example/blob/master/server.js
