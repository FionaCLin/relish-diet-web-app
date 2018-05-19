'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;
  let api = opts.api;

  api.recipes.get = (recipe_id, done) => {

    let recipe;

    let getRecipes = (next) => {
      lib.recipes.getAll(
        (err, res) => {
          if (!res) {
            return next(new Error('action not permitted'));
          }
          recipes = res;
          next(err);
        });
    };

    // filter the recipes for the given goal

    async.series([
      getRecipe
    ], (err) => {
      done(err, );
    });
  };
};
