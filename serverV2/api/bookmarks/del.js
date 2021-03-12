'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  // opposite of add.
  // remove the bookmarked recipe from the user's bookmarked list.
  // should it be done according to userID+recipeID vs bookmarkedID?

  api.bookmarks.del = (user_id, bookmarked_id, done) => {
    let bookmark, user;

    let checkUser = next => {
      lib.users.get(user_id, (err, res) => {
        if (!res) {
          return next(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    let checkValid = (next) => {
      lib.bookmarks.get(
        bookmarked_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmark does not exist'));
          }
          if (res && user_id != res.memberno) {
            return done(new Error('no permission to delete bookmark'));
          }
          bookmark = res;
          next();
        });
    };

    var del = (next) => {
      lib.bookmarks.del(
        bookmarked_id,
        (err, res) => {
          if (err) {
            next(err);
          }
          next();
        });
    };

    async.series([
      checkUser,
      checkValid,
      del
    ], (err, res) => {
      done(err, res);
    });
  };
};
