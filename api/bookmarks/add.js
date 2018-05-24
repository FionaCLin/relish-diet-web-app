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

    let user;
    let recipe;

    attrs = _.pick(attrs, keys);

    let checkUser = next => {
      lib.users.get(attrs.user_id, (err, res) => {
        if (!res) {
          return next(new Error("unknown user"));
        }
        user = res;
        next(err);
      });
    };

    let checkRecipe = next => {
      lib.recipes.get(
        attrs.recipe_id,
        (err, res) => {
          if (err) {
            return done(Error("recipe error"));
          }
          recipe = res;
          next();
        }
      )
    }

    var add = (next) => {
      lib.bookmarks.add(
        user.id, recipe.id,
        (err, res) => {
          if (err) {
            next(err);
          }
          next();
        }
      )
    }

    async.series([
      checkUser,
      checkRecipe,
      add
    ], (err, res) => {
      done(err, res);
    });
  };
};
