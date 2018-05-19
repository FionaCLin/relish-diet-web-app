'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  api.recipes.del = (recipe_id, done) => {
    var recipe;

    //should send id of deleted recipe to delete from recipe table.
    var deleteRecipe = (next) => {
      lib.recipes.del(
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
      deleteRecipe
    ], (err) => {
      done(err);
    });
  }
}
