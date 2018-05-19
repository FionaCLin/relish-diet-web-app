'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;
  let api = opts.api;

// to get My Posted Recipes
// returns a list of recipes.

  api.recipes.getByUser = (user_id, done) => {

    let recipes;

// based on the user id to get recipes that they have made.

    let getRecipe = (next) => {
      lib.recipes.getUser(
        user_id,
        (err, res) => {
          if (!res) {
            return next(new Error('unknown user/no recipes'));
          }
          recipes = res;
          next(err);
        });
    };

    async.series([
      getRecipe
    ], (err) => {
      done(err, recipes);
    });
  };
};
