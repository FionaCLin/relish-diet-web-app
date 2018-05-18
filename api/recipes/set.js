'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.recipes.set = (recipe_id, attrs, done) => {
    let recipe;
    // whitelist attrs
    let keys = [
      'memberno',
      'name',
      'method',
      'duration',
      // 'calories',
      // 'protein',
      // 'carbs',
      // 'fat',
      'rate'
    ];

    attrs = _.pick(attrs, keys);

    let getRecipe = (next) => {
      lib.recipes.get(
        recipe_id,
        (err, res) => {
          if (!res) {
            next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    let set = (next) => {
      lib.recipes.set(
        recipe_id,
        attrs, (err) => {
          next(err);
        });
    };

    async.series([
      getRecipe,
      set
    ], (err) => {
      done(err);
    });
  };
};
