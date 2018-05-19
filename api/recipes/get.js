'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;
  let api = opts.api;

  api.recipes.get = (recipe_id, done) => {

    let recipe;

    let getRecipe = (next) => {
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
