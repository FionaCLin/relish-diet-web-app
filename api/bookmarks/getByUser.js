'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  /**
    Returns list of recipes bookmarked by a user.
  **/

  api.bookmarks.getByUser = (user_id, done) => {
    let recipe;

    var get = (next) => {
      lib.bookmarks.getByUser(
        user_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmarks do not exist'));
          }
          recipe = res;
          next();
        });
    };

    async.series([
      get
    ], (err) => {
      done(err, recipe);
    });
  };
};
