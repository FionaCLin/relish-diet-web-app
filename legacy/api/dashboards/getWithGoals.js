'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.dashboards.getWithGoal = (user_id, attrs, done) => {
    let user, recipe;
    let recipes = [];
    let goals = [];
    let keys = [
      'calories',
      'cabs',
      'fats',
      'protein',
      'sodium'
    ];

    let checkUser = next => {
      lib.users.get(user_id, (err, res) => {
        if (err || !res) {
          return next(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    let grabGoals = next => {
      attrs.forEach(attr => {
        let goal = _.defaults(attr, {
          calories: undefined,
          cabs: undefined,
          fats: undefined,
          protein: undefined,
          sodium: undefined
        });
        goals.push(goal);
      });
      next();
    };

    let getRecipe = (next) => {
      lib.recipes.getAll(
        (err, res) => {
          if (!res) {
            return next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    // only filter with 1 goal for a now
    let filterOne = (goal, cb) => {
      recipe.forEach((recipe) => {
        if ((isNaN(goal.calories) || (!isNaN(goal.calories) && recipe.calories < goal.calories)) &&
          (isNaN(goal.cabs) || (!isNaN(goal.cabs) && recipe.cabs < goal.cabs)) &&
          (isNaN(goal.protein) || (!isNaN(goal.protein) && recipe.protein < goal.protein)) &&
          (isNaN(goal.fat) || (!isNaN(goal.fat) && recipe.fat < goal.fat)) &&
          (isNaN(goal.sodium) || (!isNaN(goal.sodium) && recipe.sodium < goal.sodium))) {
            console.log("PUSHED");
          recipes.push(recipe);
        }
      });
      cb();
    };

    let filter = next => {
      async.forEach(goals, (goal, cb) => {
        filterOne(goal, cb);
      }, next);
    };

    async.series([
      checkUser,
      grabGoals,
      getRecipe,
      filter
    ], (err) => {
      done(err, recipes);
    });
  };
};
