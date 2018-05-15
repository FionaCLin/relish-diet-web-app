'use strict';

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  api.users.auth = (email, password, ip, done) => {
    if (typeof ip === 'function') {
      done = ip;
      ip = null;
    }

    lib.users.auth(
      email,
      password,
      (err, user) => {
        done(err, user);
      });
  };
};
