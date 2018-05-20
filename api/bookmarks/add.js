'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  //adds to the bookmarked table for the user, along with the recipe ID.
  //frontend: adds to My Bookmarked/Saved recipes.

  api.bookmarks.add = (attrs, done) => {

    // whitelist attrs
    var keys = [
      'user_id',
      'recipe_id'
    ];

    attrs = _.pick(attrs, keys);

    //does the recipe id already exist?
    //should i add a check here? fk it

    var add = (next) => {
      lib.bookmarks.add(
        attrs.user_id, attrs.recipe_id,
        (err, res) => {
          if (err) {
            next(err);
          }
          next();
        }
      )
    }

    async.series([
      add
    ], (err) => {
      done(err, user);
    });
  };
};
