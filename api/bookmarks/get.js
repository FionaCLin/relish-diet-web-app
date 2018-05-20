'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  /**
    Returns all the recipes which the user has bookmarked as a list.
    For the my Bookmarked Recipes page.
  **/

  api.bookmarks.get = (user_id, done) => {

    let recipes;

    var get = (next) => {
      lib.bookmarks.get(
        user_id,
        (err, res) => {
          if (err) {
            next(err);
          }
          recipes = res;
        }
      )
    }

    async.series([
      get
    ], (err) => {
      done(err, recipes);
    });
  };
};
