'use strict';

var async = require('async');

module.exports = (opts) => {
  var lib = require('../lib')(opts);

  var api = {};

  api.lib = lib;

  api.version = {
    'fresh-fridge': '1.0.0'
  };

  api.env = opts.env;

  api.logger = lib.logger;
  api.log = console.log;

  if (api.env === 'production') {
    api.log = () => {};
  }

  if (!api.env) {
    api.log = () => {};
  }

  api.users = require('./users')({
    api: api,
    lib: lib
  });

  // api.products = require('./recipes')({
  //   api: api,
  //   lib: lib
  // });
  /**
   * purge all data in the system to pristine state (use for testing)
   */
  api.reset = (quick, done) => {
    // if quick is true then s3 will not be purged

    if (typeof quick === 'function') {
      done = quick;
      quick = false;
    }

    lib.reset(quick, done);
  };

  /**
   * quit any open clients. use this for clean shutdown
   */
  api.quit = (done) => {
    async.series([
      lib.quit
    ], () => {
      if (done) {
        done();
      }
    });
  };

  // export the core api
  return api;
};
