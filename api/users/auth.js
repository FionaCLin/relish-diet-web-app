'use strict';

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  api.users.auth = (email, password, done) => {
    lib.users.auth(
      email,
      password,
      (err, user) => {
        done(err, user);
      });
  };
};
