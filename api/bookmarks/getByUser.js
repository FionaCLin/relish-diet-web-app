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
    let bookmarks;

    var get = (next) => {
      lib.bookmarks.getByUser(
        user_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmarks do not exist'));
          }
          bookmarks = res;
          next();
        });
    };
    let getRecipes = next => {
      async.forEach(bookmarks, (bookmark, cb) => {
        lib.recipes.get(
          bookmark.recipe_id,
          (err, res) => {
            bookmark.recipe = res;
            cb();
          });
      }, next);
    };
    async.series([
      get,
      getRecipes
    ], (err) => {
      done(err, bookmarks);
    });
  };
};
