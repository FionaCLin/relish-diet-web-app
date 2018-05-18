'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {

  var lib = opts.lib;
  var api = opts.api;

  api.recipes.get = (recipe_id, done) => {

    var recipe;

    var getRecipe = (next) => {
      lib.recipes.get(
        recipe_id,
        (err, res) => {
          if (!res) {
            return next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    async.series([
      getRecipe
    ], (err) => {
      done(err, user);
    });
  };
};
