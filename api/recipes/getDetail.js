'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;
  let api = opts.api;

  api.recipes.get = (recipe_id, done) => {

    let recipe;


    let getRecipe = (next) => {
      lib.recipes.getDetail(
        recipe_id,
        (err, res) => {
          if (!res) {
            return next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };


    let getReviews = (next) => {
      lib.review.getByRecipe(
        recipe_id,
        (err, res) => {
          if (!res) {
          }
          recipe.reviews = res;
          next(err);
        });
    };

    async.series([
      getRecipe,
      getReviews
    ], (err) => {
      done(err, user);
    });
  };
};
