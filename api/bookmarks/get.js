'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  /**
    Returns one recipe that is bookmarked.
    Not sure if we even need this.
  **/

  api.bookmarks.get = (user_id, bookmark_id, done) => {
    let user, bookmark;

    let checkUser = next => {
      lib.users.get(user_id, (err, res) => {
        if (!res) {
          return next(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    var get = (next) => {
      lib.bookmarks.get(
        bookmark_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmark doees not exist'));
          }
          if (res && user_id != res.memberno) {
             return done(new Error('no permission to delete bookmark'));
           }
          bookmark = res;
          next(err);
        });
    };

    async.series([
      checkUser,
      get
    ], (err) => {
      done(err, bookmark);
    });
  };
};
