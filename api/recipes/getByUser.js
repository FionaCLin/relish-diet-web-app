'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.recipes.getByUser = (user_id, done) => {
    // let's assume user goal is a number of calories intake daily
    let user, recipes;
    let getUser = (next) => {
      lib.users.get(
        user_id,
        (err, res) => {
          if (err || !res) {
            return next(new Error('unknown user'));
          }
          user = res;
          next(err);
        });
    };

    // based on the user id to get recipes that they have made.

    let getRecipes = (next) => {
      lib.recipes.getByUser(
        user.id,
        (err, res) => {
          if (!res) {
            return next(new Error('no recipes'));
          }
          recipes = res;
          next(err);
        });
    };

    // filter the recipes by the total calories 50 above and below the goal
    let filterRecipes = (next) => {
      recipes = recipes.filter(recipe => recipe.calories < user.calories_goal + 50 && recipe.calories > user.calories_goal - 50);
      next();
    };

    async.series([
      getUser,
      getRecipes
      // filterRecipes
    ], (err) => {
      done(err, recipes);
    });
  };
};
